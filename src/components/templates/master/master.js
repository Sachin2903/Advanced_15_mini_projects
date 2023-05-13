import {Fragment} from "react";
import { Todolist } from "../../organisms/todolist/todolist.js";
import styles from "./master.module.css"
export function Master(){
return <Fragment>
    <div className={styles.main}>
    <Todolist/>
    </div>
    


</Fragment>

}