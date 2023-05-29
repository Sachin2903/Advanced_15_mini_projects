import { Movie } from "../organisms/movie";
import { Fragment,useLayoutEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import styles from "../../Styles/movieslide/movieslide.module.css";
import {getAllMovies} from "../../Slice/movieSlice"
export default function MovieMain(){
  const dispatch=useDispatch();
  const details=useSelector((state)=>{
    
    console.log(state.movieslide.movieList);
    return state.movieslide.movieList;

  })

  useLayoutEffect(()=>{
        dispatch(getAllMovies())

  },[])


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