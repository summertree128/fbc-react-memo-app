import { useState } from "react";

function useMemoInput() {
  const [ memoInput, setMemoInput ] = useState({
    editing: false,
    content: "",
    id: "",
  });

  const startInput = (content = "", id = "") => {
    setMemoInput({
      editing: true,
      content,
      id,
    })
  }

  const clearInput = () => {
    setMemoInput({
      editing: false,
      content: "",
      id: "",
    })
  }

  const changeInputText = (content) => {
    setMemoInput({
      editing: memoInput.editing,
      content: content,
      id: memoInput.id,
    })
  }

  return {
    memoInput,
    startInput,
    clearInput,
    changeInputText,
  };
}

export default useMemoInput;
