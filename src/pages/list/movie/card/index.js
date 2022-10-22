import { useEffect, useState } from 'react';
import CastCard from '../castCard'
import './index.css';


const Componenet = ({movie})=> {
 
    var [casts,setCasts] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:4000/movie/cast/"+movie.movie_id,{
            method : "GET",
            mode: 'cors',
            headers:{} 
        })
        .then(res=>res.json())
        .then(json=>{
            // console.log(json)
            setCasts(json);
        });
    },[])


    return (
    <>
        <div className="card">
            <div>
                <img className="movie-card-img" src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+movie.poster_path} ></img>
            </div>
            <div className="title">
                {movie.original_title}
            </div>
            <div className="overview">
                {movie.overview}
             </div>
        </div>
        <div style={{display:'flex',overflow:'scroll',gap:'10px',justifyContent:'left'}}><CastCard casts={casts}/></div>

    </>
    );
}

export default Componenet;
