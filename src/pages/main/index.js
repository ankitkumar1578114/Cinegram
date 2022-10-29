import './index.css';
import BackendUrl from '../../urls';
import SearchPage from '../search'
import PostList from '../list/post' 
import PickForYou from './pickForYou'
import { useEffect, useState,useRef } from 'react';
import NewMovies from './newMovies'
// const urlToFetch =process.env.backendURL+"/language/"
const urlToFetchNews = "https://api.themoviedb.org/3/movie/upcoming?api_key=74ac704fd074ad2bbe8a579ac983f615&language=en-US&page=1"
// const urlToFetch ="http://localhost:4000/movie/list/8243"


const 
Componenet = ()=> {

    var [articles,setArticles] = useState([]);

    const tpfyRef = useRef(null)
    const thmRef = useRef(null)
    const ptrRef = useRef(null)

    useEffect(()=>{
        // console.log("Hi")
        fetch(urlToFetchNews,{
            method : "GET",
            mode: 'cors',
            headers:{} 
        })
        .then(res=>res.json())
        .then(json=>{
            console.log(json.results)
            setArticles(json.results);
        }); 
    },[])


    return (
            <>
                <SearchPage tpfyRef={tpfyRef} ptrRef={ptrRef} thmRef={thmRef} isMainPage={true}/>
                <div className='main-container' >
                    <div className='new-movies-container'>
                        <NewMovies newMovies={articles}/>
                    </div>
                    <PickForYou tpfyRef={tpfyRef} title = "Top Picks for You" tpfyType={1}/>
                    <PickForYou tpfyRef={thmRef} title = "Top Hindi Movies" tpfyType={2}/>
                    <PickForYou  tpfyRef={ptrRef} title = "Previous Today's release" tpfyType={3}/>
                </div>
            </>
    );
}

export default Componenet;
