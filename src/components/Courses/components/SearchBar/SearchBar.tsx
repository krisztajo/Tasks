import React from "react";
import Button from "../../../../common/Button";
import styles from "./SearchBar.module.css";

const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search..." className={styles.input} />
      <Button>Search</Button>
    </div>
  );
};
export default SearchBar;
