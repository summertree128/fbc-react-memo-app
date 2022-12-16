import { useAuth } from "../hooks/useAuth";

export default function MemoDetail(props) {
  const { isLoggedIn } = useAuth();

  return (
    <form onSubmit={props.onSave} className="memo-app-form">
      <textarea
        name="text"
        onChange={props.onChange}
        value={props.text}
        className="memo-app-form-text-area"
      />
      {isLoggedIn && (
        <div className="memo-app-button-area">
          <button className="memo-app-save-button">Save</button>
          <button className="memo-app-delete-button" onClick={props.onDelete}>
            Delete
          </button>
        </div>
      )}
    </form>
  );
}
