import styles from "./Recipe.module.css";

const Recipe = () => {
  return (
    <div className={styles.recipe_page}>
      <h1>Recipe page</h1>
      <div className={styles.main}>
        <div className={styles.top}>
          <div className={styles.image}>Image Grid</div>
          <div className={styles.core_info}>Core Info Grid</div>
        </div>
        <div className={styles.bottom}>Bottom Grid</div>
      </div>
    </div>
  )
};

export default Recipe;
