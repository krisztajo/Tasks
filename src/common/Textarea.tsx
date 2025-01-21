import styles from "./Textarea.module.css";

type TextareaPropsType = {
  labelText: string;
  placeholderText: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  error?: boolean;
};

const Textarea = ({
  labelText,
  placeholderText,
  onChange,
  rows = 3,
  error,
}: TextareaPropsType) => {
  const className = error
    ? `${styles.textarea} ${styles.error}`
    : styles.textarea;
  return (
    <div>
      <label className={styles.label}>{labelText}</label>
      <textarea
        placeholder={placeholderText}
        onChange={onChange}
        className={className}
        rows={rows}
      />
    </div>
  );
};
export default Textarea;
