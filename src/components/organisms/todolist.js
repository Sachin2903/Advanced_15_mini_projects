import { Fragment,useRef } from "react";
import styles from "../../Styles/todostyle/todoStyle.module.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { todolistSlice } from "../../slice/todolistslice";
import { List } from "../molecules/list";
export function Todolist() {
    const dispatch=useDispatch();
    const inputlist=useRef("");

    const details = useSelector((state) => {
        return state.todo;
    })

    function addToGlobalState(){

        if(inputlist.current.value.length>0){
        dispatch(todolistSlice.actions.savedetails(inputlist.current.value.trim()))
        }
        inputlist.current.value="";
    } 

    return (
        <Fragment>
            <div className={styles.maintodo}>

                <div className={styles.todo}>
                    <span>
                        <input ref={inputlist} />
                        <button onClick={addToGlobalState}>Add</button>
                    </span>{
                        details.map((e,i)=><List name={e.Name} status={e.status} id={i} key={i*10}/>)
                    }
                </div>
            </div>

        </Fragment>
    )

}