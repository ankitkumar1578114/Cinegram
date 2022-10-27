import { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom'
import './index.css';


const Componenet = ({post}) => {
    
    return (
        <>
            <Link to ={"/post?id="+post.id} style={{textDecoration:'none'}}>
                <div className="post-card2" style={{color:'black'}}>
                    <div>
                        <img style={{width:'100%',height:'100%'}} src ={post.post_img_url}></img>
                    </div> 
                    <div>
                        <div className='post-card2-title'>
                            {post.title}
                        </div>
                        <div className='post-card2-overview'>
                            {post.body}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );

}

export default Componenet;
