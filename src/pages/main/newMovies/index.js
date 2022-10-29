import './index.css';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

const Component = ({newMovies})=> {

 
    useEffect(()=>{
 
    },[])

    return (
        <div className='main-container-new-movies'>
            {
                newMovies?.map((newMovie,index)=>(
                    <div className='main-container-new-movie'>
                        <div className='main-container-new-movie-img'>
                         <img src= {`https://image.tmdb.org/t/p/original/`+newMovie.poster_path} style={{width:'100%',height:'100%',borderRadius:'4px'}}/>
                        </div>
                        {/* <div className='main-container-newMovie-title'>
                            {newMovie.title}
                        </div> */}
             
                    </div>
                ))
            }
        </div>
    );
}

export default Component;
