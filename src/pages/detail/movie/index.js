import { useEffect, useState } from 'react';
import './index.css';
import BackendUrl from '../../../urls';
import PostCard from './postCard'
import ArtistCard from '../../list/movie/castCard'

const Post = ()=> {

    const urlToFetch = `${BackendUrl}/movie/`

    const [movieData,setMovieData]=useState([]);

    const [casts,setCasts] = useState([])

    const [posts,setPosts] = useState([])

    const [genres,setGenres] = useState([])

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
            // setMovieList(json);
            setMovieData(json[0]);
            setPosts(json[0].posts)
            setCasts(json[0].casts)
            setGenres(json[0].genres)
        });    

    },[])
    
    const getRevenue =(x) =>{
        if(x>=100000000){
            return parseInt(x/100000000)+"B $";
        }
        if(x>=1000000){
            return parseInt(x/1000000) +"M $";
        }
        return x+" $";
    }

    return (
    <>
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
                        <div style={{display:'flex',gap:'50px',alignItems:'baseline'}}>
                            <div className='detail-movie-details-runtime'>
                                {parseInt(movieData.runtime/60)} hr {parseInt(movieData.runtime%60)} min 
                            </div>
                            <div className='detail-movie-details-revenue'>
                                {getRevenue(movieData.revenue)}
                            </div>
                        </div>
                        <div className='detail-movie-details-genres'>{
                            genres.map((genre) => (
                                <div>{genre.genre_name}</div>
                            ))
                            }
                        </div>


                    </div>
 
                </div>
                <div className='detail-movie-left-second'>
                    {posts.map((post)=>(<>                        
                        <PostCard post={post}/>
                    </>))
                    }
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
