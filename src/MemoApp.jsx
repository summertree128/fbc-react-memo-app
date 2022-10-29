import React, { useState } from "react";
import MemoList from "./components/MemoList";
import MemoDetail from "./components/MemoDetail";
import useMemos from "./hooks/useMemos";

function MemoApp() {
  const { memos, saveMemos } = useMemos();
  const [ editingText, setEditingText ] = useState({
    editing: false,
    content: "",
    id: "",
  });

  const handleAdd = (e) => {
    e.preventDefault();
    setEditingText({
      editing: true,
      content: "",
      id: "",
    })
  }

  const handleChange = (e) => {
    setEditingText({
      editing: editingText.editing,
      content: e.target.value,
      id: editingText.id,
    })
  }

  const handleSave = (e) => {
    e.preventDefault();
    if (editingText.content.length === 0) {
      return;
    }

    if (editingText.id) {
      updateMemo(editingText.id, editingText.content);
    } else {
      createMemo(editingText.content);
    }
  }

  const handleEdit = (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    const memoToEdit = memos.find(
      (memo) => memo.id === parseInt(id)
    );
    setEditingText({
      editing: true,
      content: memoToEdit.content,
      id: id,
    })
  }

  const handleDelete = (e) => {
    e.preventDefault();
    if (editingText.id) {
      deleteMemo(editingText.id);
    }
  }

  const updateMemo = (id, text) => {
    const newMemos = [...memos];
    const updatedMemo = newMemos.find((memo) => memo.id === parseInt(id));
    updatedMemo.title = text.split("\n")[0];
    updatedMemo.content = text;

    setEditingText({
      editing: false,
      content: "",
      id: "",
    })
    saveMemos(newMemos);
  }

  const createMemo = (text) => {
    const newMemo = {
      id: Date.now(),
      title: text.split("\n")[0],
      content: text,
    };
    const newMemos = [...memos, newMemo];

    setEditingText({
      editing: false,
      content: "",
      id: "",
    })
    saveMemos(newMemos);
  }

  const deleteMemo = (id) => {
    const newMemos = memos.filter(
      (memo) => memo.id !== parseInt(id)
    );
    setEditingText({
      editing: false,
      content: "",
      id: "",
    })
    saveMemos(newMemos);
  }

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
          {editingText.editing && (
            <MemoDetail
              text={editingText.content}
              id={editingText.id}
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
