import React, { useState } from "react";
import axios from "axios";

const Gpt4Generator: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleGenerate = async () => {
    const result = await axios.post("/api/generate", { prompt });
    setResponse(result.data);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">GPT-4 Generator</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="border p-2 w-full"
        placeholder="Enter your prompt here..."
      />
      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white p-2 mt-2"
      >
        Generate
      </button>
      {response && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Response</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default Gpt4Generator;
