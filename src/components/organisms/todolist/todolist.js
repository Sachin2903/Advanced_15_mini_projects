import styles from "./todolist.module.css";
import { Fragment, useState, useRef } from "react";
import { List } from "../../molecules/list/list.js";

export function Todolist() {
    const [numberlist, setNumberList] = useState([]);

    const input = useRef("");


    function handleKeyDown(event) {

        if (event.keyCode === 13) {
            let a = [];
            if ((input.current.value.length) > 0) {
                a.push((input.current.value).trim());
                setNumberList([...numberlist, a])
            }
            input.current.value = "";
        }
    }



    function deletetask(idd) {

        setNumberList(numberlist.filter((e, i) => i !== idd));
    }



    return (
        <Fragment>

            <div className={styles.todo}>

                <div className={styles.task}>

                    {
                        numberlist.map((element, i) =>
                            <List k={i} key={i * 10} onclickfun={deletetask} stylelist={styles.list} value={element} />
                        )
                    }
                </div>
                <input onKeyDown={handleKeyDown} ref={input} type="text" placeholder="Add new User" className={styles.inputEnter} />

            </div>


        </Fragment>

    )


}