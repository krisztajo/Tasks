import styles from "./Button.module.css";

type ButtonPropsType = {
  children: React.ReactNode;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonPropsType> = ({
  children,
  fullWidth,
  type = "submit",
  onClick,
}: ButtonPropsType) => {
  const buttonClass = fullWidth
    ? `${styles.button} ${styles.fullWidth}`
    : styles.button;
  return (
    <button className={buttonClass} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
