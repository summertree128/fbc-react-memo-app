import { useAuth } from "../hooks/useAuth";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Status from "./Status";

export default function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <header className="memo-app-header">
      <p>Super Simple Memo App</p>
      <Status />
      {isLoggedIn ? <LogoutButton /> : <LoginButton />}
    </header>
  );
}
