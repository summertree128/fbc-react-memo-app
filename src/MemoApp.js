import MemoList from "./components/MemoList";

function MemoApp() {
  return (
    <div className="memo-app">
      <header className="memo-app-header">
        <p>Super Simple Memo App</p>
      </header>
      <div className="memo-app-container">
        <aside className="memo-app-sidebar">
          <MemoList />
        </aside>
        <div className="memo-app-content">
          This is content
        </div>
      </div>
    </div>
  );
}

export default MemoApp;
