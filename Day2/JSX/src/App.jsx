import "./App.css";
import { useEffect, useState } from "react";

function Header() {
  const title = ["G RAG", "RAG Studio", "G Chat", "RAG"];
  const [currentTitle, setCurrentTitle] = useState(title[0]);
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      index = (index + 1) % title.length;
      setCurrentTitle(title[index]);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header>
      <div className="nav">
        <h1 className="nav_title">{currentTitle}</h1>
        <div className="nav_menu">
          <a href="#docs-details" className="nav_docs active">
            Tài liệu
          </a>
          <a href="#pipeline" className="nav_pipeline">
            Pipeline
          </a>
        </div>
        <div className="nav_check">
          <a href="#history" className="nav_history">
            <svg
              className="oclock"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Lịch sử
          </a>
          <span className="nav_check--docs">0 tài liệu </span>
        </div>
      </div>
    </header>
  );
}

function MainContent() {
  const panelData = [
    {
      name: "Kho tài liệu",
      sub: "Tải lên tài liệu để tạo nguồn dữ liệu cho AI Agent",
    },
    {
      name: "RAG Pipeline",
      sub: "Kiến trúc hệ thống",
    },
  ];
  const panelHead = [panelData[0], panelData[1]];
  return (
    <>
      <section className="main">
        <div className="panel-head">
          <div className="panel_title">
            <h2>{panelHead[0].name}</h2>
            <p>{panelHead[0].sub}</p>
          </div>
          <div className="panel_details">
            <div className="up-file">
              <input type="file" name="file" id="file" placeholder="Chọn tệp" />
              <div class="uf-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              <div className="uf-title">Kéo thả hoặc chọn file</div>
              <div className="uf-sub">.txt · .md · .pdf · max 5MB</div>
              <button className="uf-btn">Chọn file</button>
            </div>
            <div className="flist">
              <div className="flist-label">Đã nạp</div>
              <div id="fitems"></div>
            </div>
          </div>
        </div>
        <div className="panel-chat">
          <div className="chat-head">
            <div className="chat-title">
              <h2>AI Agent</h2>
              <p>Tìm kiếm & trả lời từ tài liệu của bạn</p>
            </div>
            <span className="mbadge">Claude claude-sonnet-4-20250514</span>
          </div>
          <div className="chat-msgs">
            <div className="welcome">
              <div className="w-icon">🔍</div>
              <h3>Hỏi về tài liệu của bạn</h3>
              <p>
                Tải file lên rồi đặt câu hỏi — AI sẽ tìm kiếm và trả lời chính
                xác.
              </p>
            </div>
          </div>
          <div className="chat-area">
            <div className="area-wrap">
              <textarea
                id="chat-input"
                rows="1"
                placeholder="Đặt câu hỏi về tài liệu..."
              ></textarea>
              <button className="send-btn" id="send-btn">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2026 My RAG Website.</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
