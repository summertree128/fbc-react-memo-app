import { useCallback, useState } from "react";

function useMemoInput() {
  const [memoInput, setMemoInput] = useState({ editing: false });

  const startInput = useCallback((content = "", id = "") => {
    setMemoInput({
      editing: true,
      content,
      id,
    });
  }, []);

  const clearInput = useCallback(() => {
    setMemoInput({ editing: false });
  }, []);

  const changeInputText = useCallback(
    (content) => {
      setMemoInput({ ...memoInput, content });
    },
    [memoInput]
  );

  return {
    memoInput,
    startInput,
    clearInput,
    changeInputText,
  };
}

export default useMemoInput;
