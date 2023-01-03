import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Contents from "./components/Contents";
import useMemos from "./hooks/useMemos";
import useMemoInput from "./hooks/useMemoInput";

function MemoApp() {
  const { memos, insertMemo, updateMemo, deleteMemo } = useMemos("memos");
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
      insertMemo(memoInput.content);
    }

    clearInput();
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
      clearInput();
    }
  };

  return (
    <div className="memo-app">
      <Header />
      <div className="memo-app-container">
        <Sidebar memos={memos} onEdit={handleEdit} onAdd={handleAdd} />
        <Contents
          editing={memoInput.editing}
          text={memoInput.content}
          id={memoInput.id}
          onChange={handleChange}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default MemoApp;
