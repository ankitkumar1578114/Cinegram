import { useEffect, useState } from 'react';
import './index.css';


const Componenet = ({casts})=> {
    useEffect(()=>{
        // console.log(casts)
    },[])
    return casts.map((cast)=>(
        <>
            <div className="movie-cast-card">
                <div className="movie-cast-card-img-box">
                    <img className="movie-cast-card-img" src={cast.google_url}></img>                    
                </div>
                <div className="movie-cast-card-title">
                {cast.name} 
                </div>
                <div className="movie-cast-card-title" style={{color:'gray',fontWeigh:'600'}}>
                    ({cast.character_name})
                </div>
            </div>
        </>
    ));

}

export default Componenet;
