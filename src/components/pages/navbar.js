import { Fragment } from "react";
import styles from "../../Styles/navbar/navbar.module.css"
import {BsHeartFill} from "react-icons/bs"
import React from 'react';
import { Link } from "react-router-dom";


export function Navbar(){
   
    return(
        <Fragment>
            <div className={styles.navbox}>
            <Link to="/favorite" className={styles.home} ><BsHeartFill className={styles.fav}/>Favorite</Link>
            <Link to={"/"} className={styles.home}>HOME</Link>
            </div>



        </Fragment>

    )
}