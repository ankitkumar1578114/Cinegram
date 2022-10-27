import { useEffect, useState } from 'react';
import './index.css';
import BackendUrl from '../../../urls';
import HistogramForGenre from '../../../components/histogram'
import MovieCard from '../../list/artist/movieCard'


const Component = ()=> {

    const [artistData,setArtistData]=useState([]);
    const [artistMovies,setArtistMovies]=useState([]);
    const [genresPercentage,setGenresPercentage] =useState([])

    const urlToFetch = `${BackendUrl}/artist/`


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
            console.log(json)
            // setartistList(json);
            setArtistData(json[0]);
            setArtistMovies(json[0].movies);
            setGenresPercentage(json[0].genres_percentage)
        });    

    },[])


    return (
    <>
        <div className='detail-artist'>
            <div className='detail-artist-left'>
                
                <div className='detail-artist-left-first'>
                    <div className='detail-artist-img'>
                        <img src ={artistData.google_url} style={{width:'100%',height:'100%'}}/>
                    </div>
                    <div className='detail-artist-details'>
                        <div className='detail-artist-details-title'>
                            {artistData.name}
                        </div>
                        <div> 
                             <HistogramForGenre genresPercentage={genresPercentage} />
                        </div>
                    </div>

                </div>

            </div>
           <div className='detail-artist-right'>
                <MovieCard movies={artistMovies}/>
           </div>
        </div>
    </>
    );
}

export default Component;
