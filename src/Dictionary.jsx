import React, { useState } from "react";
import axios from "axios";

const Dictionary = ({ darkMode }) => {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!word) return;
    setError(null);

    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setResult(response.data[0]);
    } catch (err) {
      setError("Word not found. Please try another one.");
      setResult(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "16px",
          marginRight: "10px",
          backgroundColor: darkMode ? "#333333" : "#FFFFFF",
          color: darkMode ? "#FFFFFF" : "#000000",
          border: "1px solid",
          borderColor: darkMode ? "#555555" : "#CCCCCC",
          borderRadius : "16px",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: darkMode ? "#BB86FC" : "#007BFF",
          color: darkMode ? "#000000" : "#FFFFFF",
          border: "none",
          borderRadius: "16px",
        }}
      >
        Search
      </button>

      {error && (
        <p style={{ color: darkMode ? "#FF8A80" : "red", marginTop: "20px" }}>
          {error}
        </p>
      )}

      {result && (
        <div
          style={{
            marginTop: "20px",
            textAlign: "left",
            width: "50%",
            margin: "20px auto",
            backgroundColor: darkMode ? "#222222" : "#F9F9F9",
            padding: "20px",
            borderRadius: "8px",
            color: darkMode ? "#FFFFFF" : "#000000",
          }}
        >
          <h2>Word: {result.word}</h2>
          {result.meanings.map((meaning, index) => (
            <div key={index}>
              <h3>Part of Speech: {meaning.partOfSpeech}</h3>
              <ul>
                {meaning.definitions.map((definition, idx) => (
                  <li key={idx}>
                    {definition.definition}
                    {definition.example && (
                      <p>
                        <i>Example: {definition.example}</i>
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dictionary;
