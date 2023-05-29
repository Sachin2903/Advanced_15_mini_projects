import { Movie } from "../organisms/movie";
import { Fragment,useLayoutEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import styles from "../../Styles/movieslide/movieslide.module.css";
import {getAllMovies} from "../../Slice/movieSlice"



export function Favourite(){
    
    const details=useSelector((state)=>{
      return state.movieslide.favouriteList;
  
    })
  
   
  
  
    return (
      <Fragment>
         <div className={styles.movie}>
            <div className={styles.movieslide}>
              {
                details.map((e,i) => <Movie year={e.Year} title={e.Title}  imgprops={e.Poster} key={i*10}/> )
              }
            </div>
            
    
            
         </div>
        
  
  
      </Fragment>
    )
}