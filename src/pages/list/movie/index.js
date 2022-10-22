import './index.css';
import Card from './card'
import { useEffect, useState } from 'react';

const Componenet = ()=> {

    var [movieList,setMovieList] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:4000/movie/list/8243",{
            method : "GET",
            mode: 'cors',
            headers:{} 
        })
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
            setMovieList(json);
        });
    },[])

    return movieList.map((movie)=>(
        <>
            <Card movie={movie} />
        </>
    )
    );
}

export default Componenet;
