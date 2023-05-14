import { Fragment, useRef } from "react";
import { Button } from "../../atoms/button/button.js";
import styles from "./list.module.css"
import { Situation } from "../../atoms/situation/situation.js";
import { Text } from "../../atoms/text/text.js";


export function List(props) {


    const textunder = useRef("");


    function clickunderline() {
        console.log(textunder.current,props.k)
        textunder.current.style.textDecoration = 'line-through';
        if (props.taketru[textunder.current.id]) {
            
            props.setcountstate(props.countstate - 1);
            props.taketru[textunder.current.id] = false;
        }

    }

    return (
        <Fragment>
            <div className={props.stylelist}>
                <Text refff={textunder} kunder={props.k} textstyle={styles.taskname} value={props.value} />

                <Situation onclickunder={clickunderline} stylecondi={styles.condition} value="complete" />
                <Button kindex={props.k} btnclickfun={props.onclickfun} stylebtn={styles.btn} />

            </div>



        </Fragment>
    )
}