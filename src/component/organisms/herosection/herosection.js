import styles from "./herosection.module.css";
import { Fragment } from "react";
import heroimg from "../../../image/pexel.jpg";
export function Herosection() {
  return (
    <Fragment>
      <div className={styles.herosec}>
        <div className={styles.head}>
          <h1>Be There ...</h1>
          <button className={styles.headbtn}>See More ..</button>
        </div>
        <img alt="loading..." src={heroimg} />
      </div>
    </Fragment>
  );
}
