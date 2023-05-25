import { Fragment } from "react";
import Switch from '@mui/material/Switch';
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
          <Switch onChange={changeStatus}/>
          <p className={style.listtask}>{name}</p>
          <p  className={(status==="pending")?style.green:style.red}>{status}</p>
          </div>





       </Fragment>


    )
}