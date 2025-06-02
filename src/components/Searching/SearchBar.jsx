import styles from "./InputDesign.module.css";

const SearchBar = ({ placeholder = "검색" }) => {
  return (
    <section className={styles.inputDesignSearchSection}>
      <div className={styles.inputDesignSearchContainer}>
        <div className={styles.inputDesignSearchInputWrapper}>
          <span className={styles.inputDesignSearchIcon}>🔍</span>
          <span className={styles.inputDesignSearchPlaceholder}>{placeholder}</span>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
