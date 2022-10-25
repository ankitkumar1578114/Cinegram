import { useEffect, useState, useRef } from 'react';
import BackendUrl from '../../urls';
import MovieList from '../list/movie'
import './index.css';


const urlToFetch = `${BackendUrl}/movie/search/`

const Componenet = () => {

    var itemToSearch = ""
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
                <input className="search-box" placeholder="Search for movie here..." onChange={(e) => { searchFunc(e) }} type="text" />
            </form>

            <div className="search-list" >
                {
                    searchList.map((movie) => (
                        <div class='search-list-item'>
                            {movie.title}
                        </div>
                    )
                    )
                }
                
            </div>
        </>
    );

}

export default Componenet;
