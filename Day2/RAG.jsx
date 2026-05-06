import "./App.css";
import { useEffect, useState } from "react";

/* ================= HEADER ================= */
function Header() {
  const titles = ["G RAG", "RAG Studio", "G Chat", "RAG"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header>
      <div className="nav">
        <h1 className="nav_title">{titles[index]}</h1>

        <div className="nav_menu">
          <a href="#docs-details" className="nav_docs active">
            Tài liệu
          </a>
          <a href="#pipeline" className="nav_pipeline">
            Pipeline
          </a>
        </div>

        <div className="nav_check">
          <span className="nav_history">⏱ Lịch sử</span>
          <span className="nav_check--docs">0 tài liệu</span>
        </div>
      </div>
    </header>
  );
}

/* ================= UPLOAD ================= */
function UploadPanel({ files, setFiles }) {
  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...newFiles]);
  };

  return (
    <div className="panel_details">
      <div className="up-file">
        <input type="file" multiple onChange={handleFileChange} />

        <div className="uf-icon">📤</div>
        <div className="uf-title">Kéo thả hoặc chọn file</div>
        <div className="uf-sub">.txt · .md · .pdf · max 5MB</div>
      </div>

      <div className="flist">
        <div className="flist-label">Đã nạp</div>
        {files.map((file, i) => (
          <div key={i}>{file.name}</div>
        ))}
      </div>
    </div>
  );
}

/* ================= CHAT ================= */
function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };

    // mock AI trả lời
    const botMsg = {
      role: "bot",
      text: "🤖 AI đang trả lời dựa trên tài liệu của bạn...",
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="panel-chat">
      <div className="chat-head">
        <h2>AI Agent</h2>
        <p>Tìm kiếm & trả lời từ tài liệu</p>
      </div>

      <div className="chat-msgs">
        {messages.length === 0 && (
          <div className="welcome">
            <h3>Hỏi về tài liệu của bạn</h3>
            <p>Tải file lên rồi hỏi AI</p>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`msg ${msg.role}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-area">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập câu hỏi..."
        />
        <button onClick={sendMessage}>Gửi</button>
      </div>
    </div>
  );
}

/* ================= MAIN ================= */
function MainContent() {
  const [files, setFiles] = useState([]);

  return (
    <section className="main">
      <div className="panel-head">
        <div className="panel_title">
          <h2>Kho tài liệu</h2>
          <p>Tải lên tài liệu để tạo nguồn dữ liệu AI</p>
        </div>

        <UploadPanel files={files} setFiles={setFiles} />
      </div>

      <ChatBox />
    </section>
  );
}

/* ================= APP ================= */
export default function App() {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}
