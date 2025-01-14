import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
export default Button;
