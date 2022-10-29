import { useEffect, useState, useRef } from 'react';
import BackendUrl from '../../urls';
import {Link} from 'react-router-dom'
import './index.css';


const urlToFetch = `${BackendUrl}/movie/search/`

const Componenet = ({tpfyRef,ptrRef,thmRef,isMainPage}) => {

    var itemToSearch = ""

    const [selectedSearchItem,setSelectedSearchItem] = useState(-1);


    const [searchList, setSearchList] = useState([]);

    const searchFunc = (e) => {
        // e.preventDefault();
        itemToSearch = e.target.value;

        if (itemToSearch == "") {
            setSearchList([])
            return;
        }

        fetch(urlToFetch + itemToSearch, {
            method: "GET",
            mode: 'cors',
            headers: {}
        })
            .then(res => res.json())
            .then(json => {
                // console.log(json)
                setSearchList(json);
            });
    }

    const scrollToTpfyRef = () =>{
        tpfyRef.current.scrollIntoView({behavior:'smooth'})
    }
    const scrollToThmRef = () =>{
        thmRef.current.scrollIntoView({behavior:'smooth'})
    }
    const scrollToPtrRef = () =>{
        ptrRef.current.scrollIntoView({behavior:'smooth'})    
    }

    return (
        <>
            <form onSubmit={searchFunc}>
                <div className='search-box-div'>
                <div className="nav-logo">
                    <Link to={"/"} style={{textDecoration:'none',color:'white'}}>
                        Cinegram
                    </Link>
                </div>
                    <div>                    
                        <input className="search-box" placeholder="Search" style={{minWidth:(isMainPage?'800px':'400px')}} onChange={(e) => { searchFunc(e) }} type="text" /> 
                    </div>
    
                    {
                        isMainPage?(
                            <>
                                <div className='nav-menu'>
                                    <div onClick={scrollToTpfyRef}>
                                        Top 15
                                    </div>
                                    <div onClick={scrollToThmRef}>
                                        Top Hindi
                                    </div>
                                    <div onClick={scrollToPtrRef}>
                                        Previous Today's Release
                                    </div>
                               </div>
                            </>                        
                        ):(<></>)
                    }
    
                    </div>
            </form>

            <div className="search-list" >
                {
                    searchList.map((movie) => (
                        <Link to={"/movie/"+movie.id} style={{textDecoration:'none',color:'black'}}>                 
                        <div class='search-list-item'>
                            {movie.title}
                        </div>
                        </Link>
                    )
                    )
                }
                
            </div>
        </>
    );

}

export default Componenet;
