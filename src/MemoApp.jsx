import React, { useState, useEffect } from "react";
import MemoList from "./components/MemoList";
import MemoDetail from "./components/MemoDetail";

function MemoApp() {
  const [memos, setMemos] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState("");
  const [editedId, setEditedId] = useState("");
  const itemKey = "memos";

  const handleAdd = (e) => {
    e.preventDefault();
    setEditing(true);
    setEditedId("");
    setEditedText("");
  }

  const handleChange = (e) => {
    setEditedText(e.target.value);
  }

  const handleSave = (e) => {
    e.preventDefault();
    if (editedText.length === 0) {
      return;
    }

    if (editedId) {
      updateMemo(editedId, editedText);
    } else {
      createMemo(editedText);
    }
  }

  const handleEdit = (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    const memoToEdit = memos.find(
      (memo) => memo.id === parseInt(id)
    );
    setEditing(true);
    setEditedId(id);
    setEditedText(memoToEdit.content);
  }

  const handleDelete = (e) => {
    e.preventDefault();
    if (editedId) {
      deleteMemo(editedId);
    }
  }

  const updateMemo = (id, text) => {
    const newMemos = [...memos];
    const updatedMemo = newMemos.find((memo) => memo.id === parseInt(id));
    updatedMemo.title = text.split("\n")[0];
    updatedMemo.content = text;

    setMemos(newMemos);
    setEditing(false);
    setEditedId("");
    setEditedText("");
    saveMemos(newMemos);
  }

  const createMemo = (text) => {
    const newMemo = {
      id: Date.now(),
      title: text.split("\n")[0],
      content: text,
    };
    const newMemos = [...memos, newMemo];

    setMemos(newMemos);
    setEditing(false);
    setEditedId("");
    setEditedText("");
    saveMemos(newMemos);
  }

  const deleteMemo = (id) => {
    const newMemos = memos.filter(
      (memo) => memo.id !== parseInt(id)
    );
    setMemos(newMemos);
    setEditing(false);
    setEditedId("");
    setEditedText("")
    saveMemos(newMemos);
  }

 const getMemos = () => {
    const memos = localStorage.getItem(itemKey);
    return memos === null ? [] : JSON.parse(memos);
  }

  const saveMemos = (memos) => {
    localStorage.setItem(itemKey, JSON.stringify(memos));
  }

  useEffect(() => {
    const memos = getMemos();
    setMemos(memos);
  }, [])

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
          {editing && (
            <MemoDetail
              text={editedText}
              id={editedId}
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
