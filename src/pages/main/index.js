import './index.css';
import BackendUrl from '../../urls';
import SearchPage from '../search'
import PostList from '../list/post' 
import { useEffect, useState } from 'react';


// const urlToFetch =process.env.backendURL+"/language/"
const urlToFetch = `${BackendUrl}/post/list/0`
// const urlToFetch ="http://localhost:4000/movie/list/8243"


const Componenet = ()=> {

    // var [postList,setPostList] = useState([]);

    // useEffect(()=>{
    //     // console.log("Hi")
    //     fetch(urlToFetch,{
    //         method : "GET",
    //         mode: 'cors',
    //         headers:{} 
    //     })
    //     .then(res=>res.json())
    //     .then(json=>{
    //         // console.log(json)
    //         setPostList(json);
    //     }); 
    // },[])

    return (
            <div className='main-container'>
                <PostList/>
            </div>
    );
}

export default Componenet;
