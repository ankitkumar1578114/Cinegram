import { useEffect, useState } from 'react';
import './index.css';
import BackendUrl from '../../../urls';
import ArtistCard from '../../list/movie/castCard'

const Post = ()=> {

    const [movieData,setMovieData]=useState([]);

    const urlToFetch = `${BackendUrl}/movie/`

    const [casts,setCasts] = useState([])

    useEffect(()=>{
        const queryParams = new URLSearchParams(window.location.search);
        const id = queryParams.get('id');    

        fetch(urlToFetch+id,{
            method : "GET",
            mode: 'cors',
            headers:{} 
        })
        .then(res=>res.json())
        .then(json=>{
            // console.log(json)
            // setMovieList(json);
            setMovieData(json[0]);
            setCasts(json[0].casts)
        });    

    },[])
    

    return (
    <>
        <div className='detail-movie'>
            <div className='detail-movie-left'>
                
                <div className='detail-movie-left-first'>
                    <div className='detail-movie-img'>
                        <img src ={movieData.google_url} style={{width:'100%',height:'100%'}}/>
                    </div>
                    <div className='detail-movie-details'>
                        <div className='detail-movie-details-title'>
                            {movieData.title}
                        </div>
                    </div>
                </div>


            </div>
           <div className='detail-movie-right'>
                <ArtistCard casts={casts}/>
           </div>
        </div>
    </>
    );
}

export default Post;
