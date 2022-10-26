import { useEffect, useState } from 'react';
import './index.css';
// import MovieCard from '../movieCard'
import {Link}  from 'react-router-dom'
import BackendUrl from '../../../urls';

const Post = ()=> {

    const [postData,setPostData]=useState([]);

    const urlToFetch = `${BackendUrl}/post/`

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

             <div className="detail-post-tags">
            {
                postData.tags?.map((tag)=>(
                    <div>
                        <Link to={"/movie?id="+tag.tag_entity_id} style={{textDecoration:'none',color:'black'}}>                 
                            {tag.tag_entity_name}
                        </Link>
                    </div>
                ))
            }
        </div>


        </div>      
        
    </>
    );
}

export default Post;
