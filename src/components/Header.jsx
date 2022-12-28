import { useAuth } from "./AuthProvider";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <header className="memo-app-header">
      <p>Super Simple Memo App</p>
      {isLoggedIn ? <LogoutButton /> : <LoginButton />}
    </header>
  );
}
