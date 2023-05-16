import { Fragment } from "react";
import { Button } from "../../atoms/button/button.js";
import styles from "./list.module.css"
import { Text } from "../../atoms/text/text.js";


export function List(props) {

    return (
        <Fragment>
            <div className={props.stylelist}>
                <Text kunder={props.k} textstyle={styles.taskname} value={props.value} />
                <Button kindex={props.k} btnclickfun={props.onclickfun} stylebtn={styles.btn} />

            </div>
        </Fragment>
    )
}