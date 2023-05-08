import styles from "./navbar.module.css";
import logo from "../../../image/polaroid-logo.png"
import { useState } from "react";
import { Fragment } from "react"

//ImCross
import { VscError } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi"
export function Navbar() {
   const [listclass, setListclass] = useState(false);

   return (
      <Fragment>
         <div className={styles.navbar}>
            <img src={logo} className={styles.navlogo} alt="loading..." />
            <ul className={listclass?styles.navbarMobile:styles.navlist}>
               <li id="hclick"><a href="hclick">HOME</a></li>
               <li><a href="hclick">ABOUT</a></li>
               <li><a href="hclick">PROJECTS</a></li>
               <li><a href="hclick">VIDEOS</a></li>
               <li><a href="hclick">CONTACT</a></li>
               <li><button>Login</button></li>


            </ul>
            <button onClick={()=>{
                  setListclass(!listclass);
            }}className={styles.burger}>{!listclass?<GiHamburgerMenu />:<VscError/>}</button>



         </div>




      </Fragment>


   )


}