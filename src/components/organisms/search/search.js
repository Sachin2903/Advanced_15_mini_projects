import { Fragment ,useRef,useState,useEffect} from "react"
import styles from "../../../Styles/searchStyle/search.module.css"
import {AiOutlineSearch} from 'react-icons/ai';
import {MdKeyboardVoice} from 'react-icons/md';
export function Search(){
    const autoinput=useRef("");
    const [hints,setHints]=useState([]);

    function selecthintsfun(event){
        if(event.target.value.length===0){
            setHints([])
            return;    
    }
    

        fetch("http://cdn-api.co-vin.in/api/v2/admin/location/states")
       .then((res)=>res.json())
       .then((data)=>data.states)
       .then((detail)=>{
        setHints(detail.filter((e)=>e.state_name.toUpperCase().includes(event.target.value.toUpperCase())))
       }).catch(er =>alert("please wait"))
        

    }

    function autoFill(id){
        autoinput.current.value=hints[id].state_name;
        setHints([]);
    }

    return(
        <Fragment>
            <div className={styles.box}>
             <div className={styles.boxaline}>
                <div className={styles.searchbox}>
                    <AiOutlineSearch className={styles.searchicon}/>
                     <input ref={autoinput} onChange={selecthintsfun} className={styles.search} type="text" placeholder="Search"/>
                     <MdKeyboardVoice className={styles.searchicon}/>
                </div>
                <div className={styles.searchhint}>{
                    hints.map((e,i)=> <p className={styles.hinttext}  key={i*10} onClick={()=>autoFill(i)}>{e.state_name}</p>)
                  
                 
                }</div>
                </div>   
            </div>

            
        </Fragment>
    )
}