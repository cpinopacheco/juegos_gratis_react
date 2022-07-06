import styles from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={`${styles.container} animate__animated animate__fadeInUp`}>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
      <div className={styles.shadow}></div>
      <div className={styles.shadow}></div>
      <div className={styles.shadow}></div>
    </div>
  );
};

export default Loader;
