import { useEffect, useState } from 'react';
import './index.css';
import {Link} from "react-router-dom"

const Componenet = ({movies})=> {
    useEffect(()=>{

    },[])

    return movies?.map((movie)=>(
        <>
          <Link to={"/movie?id="+movie.id} style={{textDecoration:'none',color:'red'}}>
            <div className="artist-movie-card">
                <div className="artist-movie-card-img-box">
                    <img className="artist-movie-card-img" src={movie.google_url}></img>
                </div>
                <div className="artist-movie-card-title">
                    {movie.title}
                </div>
                <div className="artist-movie-card-title">
                    {movie.release_year}
                </div>
            </div>
            </Link>
        </>
    ));

}

export default Componenet;
