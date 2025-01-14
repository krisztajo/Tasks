import Button from "../../common/Button";
import Logo from "./components/Logo/logo";
import styles from "./Header.module.css";

const Header = () => {
  const isAutenticated = true;
  return (
    <header className={styles.header}>
      <Logo />
      <div>
        <span className={styles.user}>Harry Potter</span>
        {isAutenticated ? <Button>Logout</Button> : <Button>Login</Button>}
      </div>
    </header>
  );
};

export default Header;
