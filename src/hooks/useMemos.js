import { useEffect, useState } from "react";

const useMemos = (key) => {
  const [memos, setMemos] = useState([]);
  
  useEffect(() => {
    const savedMemos = localStorage.getItem(key);
    if (savedMemos) {
      setMemos(JSON.parse(savedMemos))
    }
  }, [key])

  const insertMemo = (content) => {
    const newMemo = {
      id: Date.now(),
      title: content.split("\n")[0],
      content: content,
    };
    const newMemos = [...memos, newMemo];

    saveMemos(newMemos);
  }

  const updateMemo = (id, content) => {
    const newMemos = [...memos];
    const updatedMemo = newMemos.find((memo) => memo.id === parseInt(id));
    updatedMemo.title = content.split("\n")[0];
    updatedMemo.content = content;

    saveMemos(newMemos);
  }

  const deleteMemo = (id) => {
    const newMemos = memos.filter((memo) => memo.id !== parseInt(id));
    saveMemos(newMemos);
  }

  const saveMemos = (newMemos) => {
    setMemos(newMemos);
    localStorage.setItem(key, JSON.stringify(newMemos));
  };

  return {
    memos,
    insertMemo,
    updateMemo,
    deleteMemo,
  }
}

export default useMemos;
