import styles from "./navbar.module.css";
import logo from "../../../image/polaroid-logo.png"
import { useState } from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

//ImCross
import { VscError } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi"
export function Navbar() {
   const [listclass, setListclass] = useState(false);
   const navigate=useNavigate();

   const pathByKey={
      home:"/",
      about:"/about",
      project:"/project",
      video:"/video",
      contact:"/contact",
      login:"/login",
      register:"/register"
   }
   function pageChange(k){
      navigate(pathByKey[k])
   }

   return (
      <Fragment>
         <div className={styles.navbar}>
            <img src={logo} className={styles.navlogo} alt="loading..." />
            <ul className={listclass?styles.navbarMobile:styles.navlist}>
               <li id="hclick"><a onClick={()=>pageChange("home")}>HOME</a></li>
               <li><a onClick={()=>pageChange("about")} >ABOUT</a></li>
               <li><a onClick={()=>pageChange("project")} >PROJECTS</a></li>
               <li><a onClick={()=>pageChange("video")} >VIDEOS</a></li>
               <li><a onClick={()=>pageChange("contact")} >CONTACT</a></li>
               <li><button onClick={()=>pageChange("login")}>Login</button></li>
               <li><button onClick={()=>pageChange("register")}>Register</button></li>

            </ul>
            <button onClick={()=>{
                  setListclass(!listclass);
            }}className={styles.burger}>{!listclass?<GiHamburgerMenu />:<VscError/>}</button>



         </div>




      </Fragment>


   )


}