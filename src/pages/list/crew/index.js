import './index.css';
import Card from './card'
import { useEffect, useState } from 'react';
import BackendUrl from '../../../urls';

// http://localhost:4000/artist/list/63130
//for kajol

const urlToFetch = `${BackendUrl}/crew/list/87323`


const Componenet = ()=> {

    var [crewList,setCrewList] = useState([]);

    useEffect(()=>{
        fetch(urlToFetch,{
            method : "GET",
            mode: 'cors',
            headers:{} 
        })
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
            setCrewList(json);
        });
    },[])

    return crewList.map((crew)=>(
        <>
            <Card crew={crew} />
        </>
    )
    );
}

export default Componenet;
