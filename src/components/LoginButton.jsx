import { useAuth } from "../hooks/useAuth";

export default function LoginButton() {
  const { login } = useAuth();

  const handleClick = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <button className="memo-app-login-button" onClick={handleClick}>
      Login
    </button>
  );
}
