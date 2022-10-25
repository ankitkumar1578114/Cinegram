import { useEffect, useState } from 'react';
import './index.css';
// import MovieCard from '../movieCard'
import BackendUrl from '../../../urls';

const Post = ()=> {
    var id=2;

    const [postData,setPostData]=useState([]);

    const urlToFetch = `${BackendUrl}/post/`

    useEffect(()=>{
        fetch(urlToFetch+id,{
            method : "GET",
            mode: 'cors',
            headers:{} 
        })
        .then(res=>res.json())
        .then(json=>{
            console.log(json[0])
            setPostData(json[0]);
        });
    },[])
    

    return (

    <>
        
        <div className="detail-post">
            
        <div className="detail-post-title">
                {postData.title}
            </div>

            <div>
                <img className="detail-post-img" src={postData.post_img_url} ></img>
            </div>

           

           
            
            <div className="detail-post-overview">
                {postData.body}
             </div>
        </div>      
        {/* <div style={{display:'flex',overflow:'scroll',gap:'10px',justifyContent:'left'}}><MovieCard movies={movies}/></div> */}

    </>
    );
}

export default Post;
