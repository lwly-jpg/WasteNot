import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.heading}>
        Random Ingredients?
        <span className={styles.emphasis}>Waste Not...</span>
      </h1>
      <h2 className={styles.subheading}>
        Discover <span className={styles.emphasis}> delicious recipes</span>{" "}
        with your random ingredients and{" "}
        <span className={styles.emphasis}>waste less food.</span>
      </h2>
    </div>
  );
};

export default Header;
