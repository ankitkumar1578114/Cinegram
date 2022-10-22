import { useEffect, useState } from 'react';
import './index.css';


const Componenet = ({casts})=> {
    useEffect(()=>{
        console.log(casts)
    },[])
    return casts.map((cast)=>(
        <>
            <div className="cast-card">
            <img className="cast-card-img" src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+cast.profile_path}></img>
                {cast.name}
            </div>
        </>
    ));

}

export default Componenet;
