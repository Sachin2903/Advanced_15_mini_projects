import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { todolistSlice } from "../../slice/todolistslice";
import style from "../../Styles/list/list.module.css"
export function List({name,status,id}){
    const listdispatch=useDispatch();
     function changeStatus(){
       listdispatch(todolistSlice.actions.changemystatus(id))
     }
    return (
       <Fragment>
        <div className={style.list}>
          <input onChange={changeStatus} type="radio"/>
          <p className={style.listtask}>{name}</p>
          <p >{status}</p>
          </div>





       </Fragment>


    )
}