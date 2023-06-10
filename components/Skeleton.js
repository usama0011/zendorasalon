import Row from "../components/Row";
import styles from "../styles/skeleton.module.css";
export default function Skeleton() {
  const numberOfRows = 5;

  const renderedRows = [...Array(numberOfRows)].map((e, i) => (
    <div key={i}>
      <Row />
    </div>
  ));
  return (
    <div className={styles.App}>
      {" "}
      {renderedRows}
    </div>
  );
}
