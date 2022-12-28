import AddButton from "./AddButton";
import { useAuth } from "./AuthProvider";
import MemoList from "./MemoList";

export default function Sidebar(props) {
  const { isLoggedIn } = useAuth();

  return (
    <aside className="memo-app-sidebar">
      <MemoList memos={props.memos} onEdit={props.onEdit} />
      {isLoggedIn && <AddButton onClick={props.onAdd} />}
    </aside>
  );
}
