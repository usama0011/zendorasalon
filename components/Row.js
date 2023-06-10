import styles from "../styles/skeleton.module.css";
const Row = () => (
  <div className={styles.row}>
    <div className={styles.skeleton}></div>
    <div className={styles.skeleton}></div>
    <div className={styles.skeleton}></div>
    <div className={styles.skeleton}></div>
    <div className={styles.skeleton}></div>
  </div>
);

export default Row;
