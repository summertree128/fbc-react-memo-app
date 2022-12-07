import MemoList from "./MemoList";

export default function Sidebar(props) {
  return (
    <aside className="memo-app-sidebar">
      <MemoList memos={props.memos} onEdit={props.onEdit} />
      <button onClick={props.onAdd} className="memo-app-add-button">
        +
      </button>
    </aside>
  );
}
