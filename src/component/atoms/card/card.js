import { Fragment } from "react";
import styles from "./card.module.css"
export function Card({ k }) {
  return (
    <Fragment>
      <div className={styles.cardd}>
        <img alt="Loading..." className={styles.cardphoto} src={k.img} />
        <h3>{k.name}</h3>
        <h5>{k.position}</h5>
        <h6>{k.yearexp}</h6>

      </div>


    </Fragment>
  )

}