import styles from "./todolist.module.css";
import { Fragment, useState, useRef } from "react";
import { List } from "../../molecules/list/list.js";

export function Todolist() {
    const [tru, setTru] = useState([]);
    const [numberlist, setNumberList] = useState([]);
    const [count, setCount] = useState(0);
    const input = useRef("");


    function handleKeyDown(event) {

        if (event.keyCode === 13) {
            let a = [];
            if ((input.current.value.length) > 0) {
                a.push((input.current.value).trim());
                setNumberList([...numberlist, a])
                setTru([...tru, true]);


                setCount(count + 1)
            }
            input.current.value = "";
        }
    }
    


    function deletetask(idd) {

        setNumberList(numberlist.filter((e, i) => i !== idd));

        if (tru[idd])
            setCount(count - 1);
            
        setTru(tru.filter((e, i) => i !== idd))
    }



    return (
        <Fragment>

            <div className={styles.todo}>
                <h1 className={styles.h1}>Pending task ({count})</h1>
                <div className={styles.task}>

                    {
                        numberlist.map((element, i) =>
                            <List countstate={count} setcountstate={setCount} taketru={tru} settaketru={setTru} k={i} key={i * 10} onclickfun={deletetask} stylelist={styles.list} value={element} />
                        )
                    }
                </div>
                <input onKeyDown={handleKeyDown} ref={input} type="text" placeholder="Add a new Task" className={styles.inputEnter} />

            </div>


        </Fragment>

    )


}