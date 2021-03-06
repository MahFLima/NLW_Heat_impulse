import styles from "./styles/App.module.scss";
import { LoginBox } from "./components/LoginBox";
import { MessageList } from "./components/MessageList";
import { AuthContext } from "./contexts/auth";
import { useContext } from "react";
import { SendMessageBox } from "./components/SendMessageBox";

export function App() {
  const { user } = useContext(AuthContext)
  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
      <MessageList />
      { !!user ? <SendMessageBox/> : <LoginBox />}
    </main>
  );
}
