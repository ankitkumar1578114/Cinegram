import { useEffect, useState } from 'react';
import './index.css';
import {Link} from 'react-router-dom'

const Componenet = ({casts})=> {
    useEffect(()=>{
        // console.log(casts)
    },[])
    return casts.map((cast)=>(
        <>
            <Link to={"/artist/"+cast.id}  style={{textDecoration:'none'}}>
                <div className="movie-cast-card">
                    <div className="movie-cast-card-img-box">
                        <img className="movie-cast-card-img" src={cast.google_url}></img>                    
                    </div>
                    <div>
                        <div className="movie-cast-card-title">
                        {cast.name} 
                        </div>
                        <div className="movie-cast-card-charecter" style={{color:'gray',fontWeigh:'600'}}>
                            {cast.character_name}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    ));

}

export default Componenet;
