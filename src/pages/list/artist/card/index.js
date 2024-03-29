import { useEffect, useState } from 'react';
import './index.css';
import MovieCard from '../movieCard'
import BackendUrl from '../../../../urls';

const Componenet = ({artist})=> {
 
    var [movies,setMovies] = useState([]);
    const urlToFetch = `${BackendUrl}/artist/movie/`

    useEffect(()=>{
        fetch(urlToFetch+artist.actor_id,{
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
                <img className="movie-card-img" src={artist.google_url} ></img>
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
