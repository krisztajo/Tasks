import { useNavigate } from "react-router-dom";
import Button from "../../common/Button";
import Logo from "./components/Logo/logo";
import styles from "./Header.module.css";

type HeaderPropsType = {
  userName: string;
  setUserName: (name: string) => void;
};

const Header: React.FC<HeaderPropsType> = ({ userName, setUserName }) => {
  // const isAutenticated = true;
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserName("");
    navigate("/login");
  };

  return (
    <header className={styles.header}>
      <Logo />
      <div>
        {userName ? (
          <span className={styles.user}>{userName}</span>
        ) : (
          <span className={styles.user}>&#128100;</span>
        )}

        {!token ? (
          <Button type="button" onClick={() => navigate("/login")}>
            Login
          </Button>
        ) : (
          <Button type="button" onClick={handleLogout}>
            Logout{" "}
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
