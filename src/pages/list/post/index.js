import './index.css';
import BackendUrl from '../../../urls';
import PostCard from '../post/postCard'
import PostCardLoader from '../post/postCardLoader'
import { useEffect, useState } from 'react';
import { Link, Redirect } from "react-router-dom";


// const urlToFetch =process.env.backendURL+"/language/"
const urlToFetch = `${BackendUrl}/post/list/0`
// const urlToFetch ="http://localhost:4000/movie/list/8243"


const Componenet = ()=> {

    var [postList,setPostList] = useState();
    var [postListLoader,setPostListLoader] = useState([0,0,0,0,0])

    useEffect(()=>{
        // console.log("Hi")
        fetch(urlToFetch,{
            method : "GET",
            mode: 'cors',
            headers:{} 
        })
        .then(res=>res.json())
        .then(json=>{
            // console.log(json)
            setPostList(json);
        }); 
    },[])

    return (<div className='post-container'>
                <div className="post-card-container">
                    {        
                    postList?        
                    postList.map((post)=>(
                        <Link to={"/post?id="+post.id} style={{textDecoration:'none',color:'black'}}>
                            <PostCard post={post}/>
                        </Link>
                    )):
                    postListLoader.map((post)=>(
                        <PostCardLoader />
                    ))
                    } 
                </div>
            </div>
    );
}

export default Componenet;
