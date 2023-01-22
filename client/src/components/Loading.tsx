import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading_container}>
      <h2 className={styles.results_header}>Loading recipes...</h2>
      <div className={styles.loading_spin}></div>
    </div>
  );
};

export default Loading;
