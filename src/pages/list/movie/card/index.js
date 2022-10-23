import { useEffect, useState } from 'react';
import BackendUrl from '../../../../urls';
import CastCard from '../castCard'
import CrewCard from '../crewCard'
import './index.css';

// const urlToFetch =process.env.backendURL +"/movie/cast/";
const urlToFetchForCasts = `${BackendUrl}/movie/cast/`
const urlToFetchForCrews = `${BackendUrl}/movie/crew/`

// const urlToFetch ="http://localhost:4000/movie/list/8243"


const Componenet = ({movie})=> {
 
    var [casts,setCasts] = useState([]);
    var [crews,setCrews] = useState([]);

    useEffect(()=>{
        fetch(urlToFetchForCasts+movie.movie_id,{
            method : "GET",
            mode: 'cors',
            headers:{} 
        })
        .then(res=>res.json())
        .then(json=>{
            // console.log(json)
            setCasts(json);
        });

        fetch(urlToFetchForCrews+movie.movie_id,{
            method : "GET",
            mode: 'cors',
            headers:{} 
        })
        .then(res=>res.json())
        .then(json=>{
            // console.log(json)
            setCrews(json);
        });


    },[])


    return (
    <>
        <div className="card">
            <div>
                <img className="movie-card-img" src={movie.google_url} ></img>
            </div>
            <div className="title">
                {movie.title}
            </div>
            <div className="overview">
                {movie.overview}
             </div>
        </div>
        <div style={{display:'flex',overflow:'scroll',gap:'10px',justifyContent:'left'}}><CastCard casts={casts}/></div>
        <div style={{display:'flex',overflow:'scroll',gap:'10px',justifyContent:'left'}}><CrewCard crews={crews}/></div>

    </>
    );
}

export default Componenet;
