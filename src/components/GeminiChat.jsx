import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";

const GeminiChat = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  
  const API_KEY = "AIzaSyBgMyo_t2xZ5Gn3IysY5M2PXMWgioixCzg"; 

  const fetchResponse = async () => {
    if (!input) return;
    setLoading(true);
    setResponse("");

    try {

      const ai = new GoogleGenAI({ apiKey: API_KEY });

          
      const result = await ai.models.generateContent({
        model: "gemini-2.5-flash", 
        contents: [{ role: "user", parts: [{ text: input }] }],
      });

      
      
      setResponse(result.text); 
      
    } catch (error) {
      console.error("Error fetching data:", error);
      setResponse("Error: Failed to fetch response. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Gemini AI Integration</h2>
      
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask Gemini something..."
        rows="4"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      
      <button 
        onClick={fetchResponse} 
        disabled={loading}
        style={{ padding: "10px 20px", cursor: loading ? "not-allowed" : "pointer" }}
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {response && (
        <div style={{ marginTop: "20px", padding: "15px", background: "#f4f4f4", borderRadius: "5px" }}>
          <strong>Response:</strong>
          <p style={{ whiteSpace: "pre-wrap" }}>{response}</p>
        </div>
      )}
    </div>
  );
};

export default GeminiChat;