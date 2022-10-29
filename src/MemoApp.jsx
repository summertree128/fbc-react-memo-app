import React from "react";
import MemoList from "./components/MemoList";
import MemoDetail from "./components/MemoDetail";
import useMemos from "./hooks/useMemos";
import useMemoInput from "./hooks/useMemoInput";

function MemoApp() {
  const { memos, saveMemos } = useMemos();
  const { memoInput, startInput, clearInput, changeInputText } = useMemoInput();

  const handleAdd = (e) => {
    e.preventDefault();
    startInput();
  };

  const handleChange = (e) => {
    changeInputText(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (memoInput.content.length === 0) {
      return;
    }

    if (memoInput.id) {
      updateMemo(memoInput.id, memoInput.content);
    } else {
      createMemo(memoInput.content);
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    const memoToEdit = memos.find((memo) => memo.id === parseInt(id));
    startInput(memoToEdit.content, id);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (memoInput.id) {
      deleteMemo(memoInput.id);
    }
  };

  const updateMemo = (id, text) => {
    const newMemos = [...memos];
    const updatedMemo = newMemos.find((memo) => memo.id === parseInt(id));
    updatedMemo.title = text.split("\n")[0];
    updatedMemo.content = text;

    saveMemos(newMemos);
    clearInput();
  };

  const createMemo = (text) => {
    const newMemo = {
      id: Date.now(),
      title: text.split("\n")[0],
      content: text,
    };
    const newMemos = [...memos, newMemo];

    saveMemos(newMemos);
    clearInput();
  };

  const deleteMemo = (id) => {
    const newMemos = memos.filter((memo) => memo.id !== parseInt(id));
    saveMemos(newMemos);
    clearInput();
  };

  return (
    <div className="memo-app">
      <header className="memo-app-header">
        <p>Super Simple Memo App</p>
      </header>
      <div className="memo-app-container">
        <aside className="memo-app-sidebar">
          <MemoList memos={memos} onEdit={handleEdit} />
          <button onClick={handleAdd} className="memo-app-add-button">
            +
          </button>
        </aside>
        <div className="memo-app-content">
          {memoInput.editing && (
            <MemoDetail
              text={memoInput.content}
              id={memoInput.id}
              onChange={handleChange}
              onSave={handleSave}
              onDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MemoApp;
