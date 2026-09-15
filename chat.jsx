import { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! 👋 I'm your AI assistant. How can I help you?"
    }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userMessage }
    ]);

    setInput("");
    setLoading(true);

    // Demo AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: `You asked: "${userMessage}"\n\nThis is a demo response. Connect an AI API to get real answers!`
        }
      ]);

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="app">
      <div className="chat-container">

        <header className="chat-header">
          <div className="logo">🤖</div>
          <div>
            <h2>AI Assistant</h2>
            <p>● Online</p>
          </div>
        </header>

        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-row ${message.sender}`}
            >
              <div className="avatar">
                {message.sender === "ai" ? "🤖" : "👤"}
              </div>

              <div className="message">
                {message.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="message-row ai">
              <div className="avatar">🤖</div>
              <div className="message typing">
                Thinking...
              </div>
            </div>
          )}
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Ask anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
          />

          <button onClick={sendMessage} disabled={loading}>
            ➤
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
