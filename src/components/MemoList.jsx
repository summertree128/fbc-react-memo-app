import React from "react";

function MemoList(props) {
  return (
    <ul>
      {props.memos.map(memo => (
        <li key={memo.id} className="memo-app-list-item">
        <a href="/#"
            onClick={props.onEdit}
            data-id={memo.id}
          >
            {memo.title}
            </a>
        </li>
      ))}
    </ul>
  );
}

export default MemoList;
