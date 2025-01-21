import styles from "./Input.module.css";

type InputPropsType = {
  labelText: string;
  placeholderText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: boolean;
  type?: string;
};

const Input = ({
  labelText,
  placeholderText,
  onChange,
  value,
  type = "text",
  error,
}: InputPropsType) => {
  const className = error ? `${styles.input} ${styles.error}` : styles.input;
  return (
    <div>
      <label className={styles.label}>{labelText}</label>
      <input
        type={type}
        placeholder={placeholderText}
        onChange={onChange}
        className={className}
        value={value}
      />
    </div>
  );
};
export default Input;
