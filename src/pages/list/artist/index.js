import './index.css';
import Card from './card'
import { useEffect, useState } from 'react';
import BackendUrl from '../../../urls';

// http://localhost:4000/artist/list/63130
//for kajol

const urlToFetch = `${BackendUrl}/artist/list/63130`


const Componenet = ()=> {

    var [artistList,setArtistList] = useState([]);

    useEffect(()=>{
        fetch(urlToFetch,{
            method : "GET",
            mode: 'cors',
            headers:{} 
        })
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
            setArtistList(json);
        });
    },[])

    return artistList.map((artist)=>(
        <>
            <Card artist={artist} />
        </>
    )
    );
}

export default Componenet;
