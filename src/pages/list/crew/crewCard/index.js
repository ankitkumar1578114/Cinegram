import { useEffect, useState } from 'react';
import './index.css';


const Componenet = ({movies})=> {
    useEffect(()=>{

    },[])

    return movies.map((movie)=>(
        <>
            <div className="artist-movie-card">
                <div className="artist-movie-card-img-box">
                    <img className="artist-movie-card-img" src={movie.google_url}></img>
                </div>
                <div className="artist-movie-card-title">
                    {movie.title}
                </div>
            </div>
        </>
    ));

}

export default Componenet;
