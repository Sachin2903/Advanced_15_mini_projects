import { Fragment } from "react";
import {BsHeartFill} from "react-icons/bs"


import { useDispatch } from "react-redux";
import {movieSlice} from "../../Slice/movieSlice";




import styles from "../../Styles/movie/movie.module.css"
export function Movie(props){
  const favDispatch=useDispatch();

  function changeFavMovie(){
    favDispatch(movieSlice.actions)
  }

   return(
    <Fragment>
        <div className={styles.moviebox}>
             
             <img className={styles.movieposter} src={props.imgprops}/>

           
            <div className={styles.moviedata}>
              <ul className={styles.moviedatalist}>
                <li>{props.title}</li>
                <li>{props.year}</li>
              </ul>

            </div>
          <span onClick={()=>{
            changeFavMovie()
          }} className={styles.heart}><BsHeartFill/></span>

        </div>


    </Fragment>
   )


}