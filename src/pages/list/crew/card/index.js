import { useEffect, useState } from 'react';
import './index.css';
import CrewCard from '../crewCard'
import BackendUrl from '../../../../urls';

const Componenet = ({crew})=> {
 
    var [movies,setMovies] = useState([]);
    const urlToFetch = `${BackendUrl}/crew/movie/`

    useEffect(()=>{
        fetch(urlToFetch+crew.crew_id,{
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
                <img className="movie-card-img" src={crew.google_url} ></img>
            </div>
            <div className="title">
                {crew?crew.name:""}
            </div>
            <div className="overview">
                {crew.job}
             </div>
        </div>
        <div style={{display:'flex',overflow:'scroll',gap:'10px',justifyContent:'left'}}><CrewCard movies={movies}/></div>

    </>
    );
}

export default Componenet;
