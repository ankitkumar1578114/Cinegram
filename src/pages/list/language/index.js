import './index.css';
import BackendUrl from '../../../urls';
import { useEffect, useState } from 'react';


// const urlToFetch =process.env.backendURL+"/language/"
const urlToFetch = `${BackendUrl}/language/`
// const urlToFetch ="http://localhost:4000/movie/list/8243"


const Componenet = ()=> {

    var [languageList,setLanguageList] = useState([]);

    useEffect(()=>{
        fetch(urlToFetch,{
            method : "GET",
            mode: 'cors',
            headers:{} 
        })
        .then(res=>res.json())
        .then(json=>{
            // console.log(json)
            setLanguageList(json);
        }); 
    },[])

    return languageList.map((language)=>(
        <>
            <button className="language-box">
                {language.original_language} ({language.movie_count})
            </button>
        </>
    )
    );
}

export default Componenet;
