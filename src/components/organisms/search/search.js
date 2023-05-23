import { Fragment ,useRef,useState,useEffect} from "react"
import styles from "../../../Styles/searchStyle/search.module.css"
import {AiOutlineSearch} from 'react-icons/ai';
import {MdKeyboardVoice} from 'react-icons/md';
export function Search(){
    const [hints,setHints]=useState([]);

    function selecthintsfun(event){
      
       
       fetch("http://cdn-api.co-vin.in/api/v2/admin/location/states")
       .then((res)=>res.json())
       .then((data)=>data.states)
       .then((detail)=>{
        setHints(detail.filter((e)=>e.state_name.includes(event.target.value)))
       }).catch(er =>alert("please wait"))
        

    }

    return(
        <Fragment>
            <div className={styles.box}>
             <div className={styles.boxaline}>
                <div className={styles.searchbox}>
                    <AiOutlineSearch className={styles.searchicon}/>
                     <input onChange={selecthintsfun} className={styles.search} type="text" placeholder="Search"/>
                     <MdKeyboardVoice className={styles.searchicon}/>
                </div>
                <div className={styles.searchhint}>{
                    hints.map((e,i)=> <p key={i*10}>{e.state_name}</p>)
                  
                 
                }</div>
                </div>   
            </div>

            
        </Fragment>
    )
}