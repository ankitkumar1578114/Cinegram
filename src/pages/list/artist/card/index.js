import { useEffect, useState } from 'react';
import './index.css';
import MovieCard from '../movieCard'

const Componenet = ({artist})=> {
 
    var [movies,setMovies] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:4000/artist/movie/"+artist.actor_id,{
            method : "GET",
            mode: 'cors',
            headers:{} 
        })
        .then(res=>res.json())
        .then(json=>{
            // console.log(json)
            setMovies(json);
        });
    },[])


    return (
    <>
        <div className="card">
            <div>
                <img className="movie-card-img" src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+artist.profile_path} ></img>
            </div>
            <div className="title">
                {artist?artist.name:""}
            </div>
            <div className="overview">
                {artist.overview}
             </div>
        </div>
        <div style={{display:'flex',overflow:'scroll',gap:'10px',justifyContent:'left'}}><MovieCard movies={movies}/></div>

    </>
    );
}

export default Componenet;
