import { useEffect, useState } from 'react';
import './index.css';


const Componenet = ({crews})=> {
    useEffect(()=>{
        // console.log(crews)
    },[])
    return crews.map((crew)=>(
        <>
            <div className="movie-cast-card">
                <div className="movie-cast-card-img-box">
                    <img className="movie-cast-card-img" src={crew.google_url}></img>                    
                </div>
                <div className="movie-cast-card-title">
                {crew.name}
                </div>
                <div className="movie-cast-card-title" style={{color:'green'}}>
                    ({crew.job})
                </div>
            </div>
        </>
    ));

}

export default Componenet;
