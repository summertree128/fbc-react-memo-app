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

  const saveMemos = (newMemos) => {
    setMemos(newMemos);
    localStorage.setItem(itemKey, JSON.stringify(memos));
  };

  return {
    memos,
    saveMemos,
  }
}

export default useMemos
