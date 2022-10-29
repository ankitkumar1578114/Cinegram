import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import './index.css';
import BackendUrl from '../../../urls';
import PostCard from './postCard'
import SearchPage from '../../search'
import ArtistCard from '../../list/movie/castCard'
import TopPickForYouCard from '../../main/pickForYou'

const Post = ()=> {

    const urlToFetch = `${BackendUrl}/movie/`

    const [movieData,setMovieData]=useState([]);

    const [casts,setCasts] = useState([])

    const [posts,setPosts] = useState([])

    const [genres,setGenres] = useState([])

    const [productionCompanies,setProductionCompanies] = useState([])

    const [artistContainerExpand,setArtistContainerExpand] = useState(0)

    const {id} = useParams();

    const increaseArtistContainerHeight = () =>{
        if(artistContainerExpand==0)
        setArtistContainerExpand(1)
        else
        setArtistContainerExpand(0)
    }

    useEffect(()=>{
        console.log("hii")

        fetch(urlToFetch+id,{
            method : "GET",
            mode: 'cors',
            headers:{} 
        })
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
            // setMovieList(json);
            setMovieData(json[0]);
            setPosts(json[0].posts)
            setCasts(json[0].casts)
            setGenres(json[0].genres)
            setProductionCompanies(json[0].production_companies)
        });    

    },[id])
    
    const getRevenue =(x) =>{
        if(x>=100000000){
            return parseInt(x/100000000)+" Billion ";
        }
        if(x>=1000000){
            return parseInt(x/1000000) +" Million ";
        }
        return x+" $";
    }

    if(movieData.length==0)
    return (
        <div className='detail-movie-box'>
        </div>
    );
    else 
    return (
    <>
        <SearchPage  isMainPage={false}/>
        <div className='detail-movie-box'>
            <div className='detail-movie'>
                <div className='detail-movie-left'>
                    
                    <div className='detail-movie-left-first'>
                        <div className='detail-movie-img'>
                            <img src ={movieData.google_url} style={{width:'100%',height:'100%',borderRadius: '2px 0 0 2px'}}/>
                        </div>
                        <div className='detail-movie-details'>

                            <div className='detail-movie-details-title'>
                                {movieData.title}
                            </div>
                            <div className='detail-movie-details-tagline'>
                                {movieData.tagline}
                            </div>
                            <div className='detail-movie-details-overview'>
                                {movieData.overview}
                            </div>

                            <div className='detail-movie-details-genres'>{
                                genres.map((genre) => (
                                    <div>{genre.genre_name}</div>
                                    ))
                                }
                            </div>
                        </div>
    
                    </div>                
                </div>
            <div className='detail-movie-right'>
                <div>
                    <div className='detail-movie-right-production-companies-title'>Production Companies</div>
                    <div className='detail-movie-right-production-companies'>{
                        productionCompanies.map((productionCompany) => (
                            <div>{productionCompany.production_company_name}&nbsp;&nbsp;</div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <div className='detail-movie-right-production-companies-title' style={{fontSize:'20px'}}>
                       Runtime
                    </div>
                    <div className='detail-movie-right-production-companies'>
                        {parseInt(movieData.runtime/60)} Hour {parseInt(movieData.runtime%60)} Minutes 
                    </div>
                </div>
                <div>
                    <div className='detail-movie-right-production-companies-title' style={{fontSize:'20px'}}>
                       Revenue
                    </div>
                    <div className='detail-movie-right-production-companies'>
                        {getRevenue(movieData.revenue)}Dollor
                    </div>
                </div>

            </div>
            </div>

            <div className='detail-movie-second' style={{maxHeight:(artistContainerExpand?"20000px":"210px")}}>
                    <ArtistCard casts={casts}/>
            </div>
            <div className='detail-movie-second-see-more' onClick={increaseArtistContainerHeight}>
                {
                    artistContainerExpand?"See Less":"See More"
                }
            </div>
        </div>
        <TopPickForYouCard title={"Top hits in ("+(movieData.release_year?movieData.release_year:"........")+")"}  tpfyType={4} language ={movieData.original_language}/>
    </>
    );
}

export default Post;
