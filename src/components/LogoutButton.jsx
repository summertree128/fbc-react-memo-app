import { useAuth } from "./AuthProvider";

export default function LogoutButton() {
  const { logout } = useAuth();

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <button className="memo-app-logout-button" onClick={handleClick}>
      Logout
    </button>
  );
}
