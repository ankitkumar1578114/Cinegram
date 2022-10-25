import { useEffect, useState } from 'react';
import BackendUrl from '../../../../urls';
import CastCard from '../castCard'
import CrewCard from '../crewCard'
import './index.css';

// const urlToFetch =process.env.backendURL +"/movie/cast/";
const urlToFetchForCasts = `${BackendUrl}/movie/cast/`
const urlToFetchForCrews = `${BackendUrl}/movie/crew/`

// const urlToFetch ="http://localhost:4000/movie/list/8243"

const BottomComponent = ({isShowBottom,casts,movie,crews}) =>{
    if(isShowBottom)
    return (
        <>
            <div className="other-details">
                <div className="movie-card-original-language">{movie.original_language}</div>
                <div>Budget:{movie.budget}</div>
                <div>Revenue:{movie.revenue}</div>
                <div>{movie.runtime} mins</div>
                <div>Vote:{movie.vote_count}</div>
            </div>
            <div style={{display:'flex',overflow:'scroll',gap:'10px',justifyContent:'left'}}><CastCard casts={casts}/></div>
            <div style={{display:'flex',overflow:'scroll',gap:'10px',justifyContent:'left'}}><CrewCard crews={crews}/></div>
        </>

    );    
}

const Componenet = ({movie})=> {
 
    var [casts,setCasts] = useState([]);
    var [crews,setCrews] = useState([]);
    var [isShowBottom,setIsShowBottom] = useState(false);

    const getCastCrewData = () =>{
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
   
    }

    const changeShowBottom=()=>{
        getCastCrewData();
        setIsShowBottom(!isShowBottom);
    }

    return (
    <>
    <div style={{backgroundColor:'aquamarine',margin:'10px 0'}}>
        <div className="card">
            <div>
                <img className="movie-card-img" src={movie.google_url} ></img>
            </div>
            <div style={{padding:'10px',height:'inherit',display:'flex',flexDirection:'column',gap:'5px'}}>
                <div className="title">
                    {movie.title} 
                </div>
                <div className="tagline">{movie.tagline}</div>

                <div className="overview">
                    {movie.overview}
                </div>
            </div>
        </div>
        <div className='showButton-box'>
            <button onClick={changeShowBottom} className="showButton" >{isShowBottom?'Hide All':'Show More'}</button>
        </div>
        <BottomComponent isShowBottom={isShowBottom} casts={casts} movie={movie} crews={crews}/>
 
    </div>
    </>
    );
}

export default Componenet;
