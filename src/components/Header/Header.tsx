import { ViewType } from "../../App";
import Button from "../../common/Button";
import Logo from "./components/Logo/logo";
import styles from "./Header.module.css";

type HeaderPropsType = {
  setView: (view: ViewType) => void;
};

const Header: React.FC<HeaderPropsType> = ({ setView }) => {
  // const isAutenticated = true;
  return (
    <header className={styles.header}>
      <Logo />
      <div>
        <span className={styles.user}>&#128100;</span>
        <Button type="button" onClick={() => setView("login")}>
          Login
        </Button>
      </div>
    </header>
  );
};

export default Header;
