import './index.css';
import Card from './card'
import BackendUrl from '../../../urls';
import { useEffect, useState } from 'react';

// http://localhost:4000/movie/list/8243
//for veer zaara movie

// const urlToFetch = `${BackendUrl}/movie/list/0`
// const urlToFetch = `${BackendUrl}/movie/list/1639`
const urlToFetch =  `${BackendUrl}/movie/list/8243`

const Componenet = ({calledFrom,movies})=> {

    var [movieList,setMovieList] = useState(movies);

    useEffect(()=>{
 
        setMovieList(movies)
 
        if(!calledFrom){
            fetch(urlToFetch,{
                method : "GET",
                mode: 'cors',
                headers:{} 
            })
            .then(res=>res.json())
            .then(json=>{
                // console.log(json)
                setMovieList(json);
            });    
        }
    },[movies])

    if(!movieList)
    return (<></>);
    else
    return movieList.map((movie)=>(
        <>
            <Card movie={movie} />
        </>
    )
    );
}

export default Componenet;
