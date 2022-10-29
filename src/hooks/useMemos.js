import { useEffect, useState } from "react";

const useMemos = () => {
  const itemKey = "memos";
  const [memos, setMemos] = useState([]);
  
  useEffect(() => {
    const savedMemos = localStorage.getItem(itemKey);
    if (savedMemos) {
      setMemos(JSON.parse(savedMemos))
    }
  }, [])

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
    localStorage.setItem(itemKey, JSON.stringify(memos));
  };

  return {
    memos,
    insertMemo,
    updateMemo,
    deleteMemo,
  }
}

export default useMemos;
