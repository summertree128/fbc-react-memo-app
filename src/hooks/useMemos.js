import { useCallback, useEffect, useState } from "react";

const useMemos = (key) => {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    const savedMemos = localStorage.getItem(key);
    if (savedMemos) {
      setMemos(JSON.parse(savedMemos));
    }
  }, [key]);

  const saveMemos = useCallback(
    (newMemos) => {
      setMemos(newMemos);
      localStorage.setItem(key, JSON.stringify(newMemos));
    },
    [key]
  );

  const insertMemo = useCallback(
    (content) => {
      const newMemo = {
        id: Date.now(),
        title: content.split("\n")[0],
        content: content,
      };
      const newMemos = [...memos, newMemo];

      saveMemos(newMemos);
    },
    [memos, saveMemos]
  );

  const updateMemo = useCallback(
    (id, content) => {
      const newMemos = [...memos];
      const updatedMemo = newMemos.find((memo) => memo.id === parseInt(id));
      updatedMemo.title = content.split("\n")[0];
      updatedMemo.content = content;

      saveMemos(newMemos);
    },
    [memos, saveMemos]
  );

  const deleteMemo = useCallback(
    (id) => {
      const newMemos = memos.filter((memo) => memo.id !== parseInt(id));
      saveMemos(newMemos);
    },
    [memos, saveMemos]
  );

  return {
    memos,
    insertMemo,
    updateMemo,
    deleteMemo,
  };
};

export default useMemos;
