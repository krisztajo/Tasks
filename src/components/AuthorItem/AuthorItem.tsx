import { AuthorType } from "../../constants";

import styles from "./AuthorItem.module.css";

type AuthorItemType = {
  author: AuthorType;
  handleAdd: (id: string) => void;
  handleDelete: (id: string) => void;
};

const AuthorItem = ({ author, handleAdd, handleDelete }: AuthorItemType) => (
  <div className={styles.authorItem}>
    <span className={styles.authorName}>{author.name}</span>
    <span className={styles.actionIcons}>
      <button
        type="button"
        className={styles.addIcon}
        onClick={() => handleAdd(author.id)}
      >
        +
      </button>
      <button
        className={styles.deleteIcon}
        type="button"
        onClick={() => handleDelete(author.id)}
      >
        &#128465;
      </button>
    </span>
  </div>
);
export default AuthorItem;
