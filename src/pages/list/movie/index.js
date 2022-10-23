import './index.css';
import Card from './card'
import BackendUrl from '../../../urls';
import { useEffect, useState } from 'react';

// http://localhost:4000/movie/list/8243
//for veer zaara movie

const urlToFetch = `${BackendUrl}/movie/list/1639`
// const urlToFetch =  `${BackendUrl}/movie/list/8243`

const Componenet = ()=> {

    var [movieList,setMovieList] = useState([]);

    useEffect(()=>{
        console.log(urlToFetch)
        fetch(urlToFetch,{
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
