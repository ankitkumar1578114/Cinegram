import { useEffect, useState } from 'react';
import './index.css';


const Componenet = ({movies})=> {
    useEffect(()=>{

    },[])

    return movies.map((movie)=>(
        <>
            <div className="cast-card">
            <img className="cast-card-img" src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+movie.poster_path}></img>
                {movie.original_title}
            </div>
        </>
    ));

}

export default Componenet;
