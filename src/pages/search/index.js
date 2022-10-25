import { useEffect, useState } from 'react';
import BackendUrl  from '../../urls';
import MovieList from '../list/movie'
import './index.css';


const urlToFetch =  `${BackendUrl}/movie/search/`

const Componenet = ()=> {

    const [itemToSearch,setItemToSearch]= useState()
    const [movieList,setMovieList] = useState();

    const searchFunc = e => {
        // e.preventDefault();
        setItemToSearch(e.target.value)
        if(itemToSearch=="")
        return ;
        fetch(urlToFetch+itemToSearch,{
            method : "GET",
            mode: 'cors',
            headers:{} 
        })
        .then(res=>res.json())
        .then(json=>{
            // console.log(json)
            setItemToSearch("");
            setMovieList(json);
        });
    }


    return (
        <>
            <form onSubmit={searchFunc}>
                <input className="search-box" placeholder="Search for movie here..." onChange = { (e) =>{searchFunc(e) }} type="text"/>
            </form>

               <MovieList movies = {movieList} calledFrom ="searchPage" />

            {/* <List movieList={movieList}/> */}
        </>
    );

}

export default Componenet;
