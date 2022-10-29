import './index.css';
import BackendUrl from '../../../urls';
import PickForYouCard from './pickForYouCard'
import PickForYouCardLoader from './pickForYourCardLoader'
import { useEffect, useState } from 'react';


// const urlToFetch =process.env.backendURL+"/language/"
// const urlToFetch ="http://localhost:4000/movie/list/8243"


const Componenet = ({title,tpfyType,language,tpfyRef})=> {

    var [movieList,setMovieList] = useState();
    var [movieListForLoader,setMovieListForLoader] = useState([0,0,0,0,0,0,0,0]);

    var urlToFetch=""


    useEffect(()=>{
        if(tpfyType==1)
        urlToFetch = `${BackendUrl}/movie/list/0`

        if(tpfyType==2)
        urlToFetch = `${BackendUrl}/movie/list/lang/hi`

        if(tpfyType==3)
        urlToFetch = `${BackendUrl}/movie/list/released/today`
        
        if(tpfyType==4)
        urlToFetch = `${BackendUrl}/movie/list/lang/`+ language

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
    },[language])

    return (
            <div className='top-pick' ref={tpfyRef}>
                <div className='top-pick-title'> {title} </div>
                <div className="top-pick-hr">

                </div>
                <div className='top-pick-list'>
                    {
                        movieList?
                        movieList.map((movie)=>(
                            <><PickForYouCard movie={movie}/></>
                        )):
                        movieListForLoader.map((movie)=>(
                            <><PickForYouCardLoader/></>
                        ))
                    }
                </div>
            </div>
    );
}

export default Componenet;
