import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import './index.css';
import BackendUrl from '../../../urls';
import HistogramForGenre from '../../../components/histogram'
import MovieCard from '../../list/artist/movieCard'
import SearchPage from '../../search';
import TopPickForYouCard from '../../main/pickForYou'

const Component = ()=> {

    const [artistData,setArtistData]=useState([]);
    
    const [artistMovies,setArtistMovies]=useState([]);
    
    const [genresPercentage,setGenresPercentage] =useState([])

    const [artistContainerExpand,setArtistContainerExpand] = useState(0)

    const increaseArtistContainerHeight = () =>{
        if(artistContainerExpand==0)
        setArtistContainerExpand(1)
        else
        setArtistContainerExpand(0)
    }


    const urlToFetch = `${BackendUrl}/artist/`

    const {id} = useParams();

    useEffect(()=>{

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

    },[id])


    return (
    <>
        <SearchPage isMainPage={false}/>
        <div className='detail-artist'>
            <div className='detail-artist-first'>
                    <div className='detail-artist-first-left'>
                        <div className='detail-artist-img'>
                            <img src ={artistData.google_url} style={{width:'100%',height:'100%'}}/>
                        </div>
                    </div>
                    <div className='detail-artist-details'>
                        <div className='detail-movie-details-title'>
                            {artistData.name}
                        </div>
                        {/* <div className='detail-movie-details-similer-actors'>  */}
                             {/* <ArtistCard casts={[artistData,artistData,artistData,artistData]}/> */}
                        {/* </div> */}

                    </div>
                    <div>
                         <HistogramForGenre genresPercentage={genresPercentage} />   
                    </div>
            </div>

            <div className='artist-movie-container'>
                <div className='detail-artist-second' style={{maxHeight:(artistContainerExpand?"20000px":"210px")}}>
                        <MovieCard movies={artistMovies}/>
                </div>
                <div className='detail-artist-second-see-more' onClick={increaseArtistContainerHeight}>
                    {
                        artistContainerExpand?"See Less":"See More"
                    }
                </div>

            </div>
        </div>
        <TopPickForYouCard title={"Must Watch"}  tpfyType={1} />
    </>
    );
}

export default Component;
