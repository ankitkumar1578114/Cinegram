import { useEffect, useState, useRef } from 'react';
import BackendUrl from '../../urls';
import {Link} from 'react-router-dom'
import './index.css';


const urlToFetch = `${BackendUrl}/movie/search/`

const Componenet = () => {

    var itemToSearch = ""

    const [selectedSearchItem,setSelectedSearchItem] = useState(-1);


    const [searchList, setSearchList] = useState([]);

    const searchFunc = (e) => {
        // e.preventDefault();
        itemToSearch = e.target.value;

        // console.log(itemToSearch)

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

    return (
        <>
            <form onSubmit={searchFunc}>
                <div className='search-box-div'>
                <input className="search-box" placeholder="Search for movie here..." onChange={(e) => { searchFunc(e) }} type="text" /> 
                </div>
            </form>

            <div className="search-list" >
                {
                    searchList.map((movie) => (
                        <Link to={"/movie?id="+movie.id} style={{textDecoration:'none',color:'black'}}>                 
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
