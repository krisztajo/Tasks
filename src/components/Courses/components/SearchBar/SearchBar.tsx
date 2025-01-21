import React from "react";

import Button from "../../../../common/Button";

import styles from "./SearchBar.module.css";

type SearchBarPropsType = {
  setFilterValue: (value: string) => void;
  filterValue: string;
};

const SearchBar: React.FC<SearchBarPropsType> = ({
  filterValue,
  setFilterValue,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search..."
        value={filterValue}
        className={styles.input}
        onChange={handleChange}
      />
      <Button>Search</Button>
    </div>
  );
};
export default SearchBar;
