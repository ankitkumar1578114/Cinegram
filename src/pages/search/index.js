import { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom'

import BackendUrl from '../../urls';
import './index.css';


const SearchListComponent = ({searchList,setSearchList}) =>{
   

    return (
        searchList.map((item) => (
            <Link
            onClick={()=>setSearchList([])}
            to={
                item.entity_type=='Movie'?
                "/movie/"+item.id:
                "/artist/"+item.id
                } style={{textDecoration:'none',color:'black'}}>                 
            <div class='search-list-item'>
                {item.entity_type=='Movie'?item.title:item.name}
                <div>{item.entity_type}</div>
            </div>

            </Link>
        )
        )
    )
}

const urlToFetch = `${BackendUrl}/search/`

const Componenet = ({tpfyRef,ptrRef,thmRef,isMainPage}) => {


    const useOutsideAlerter = (ref)=> {
        useEffect(() => {

            function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
               setSearchList([]) //change if click is outside of searchList
            }
          }
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
      }


    const [searchList, setSearchList] = useState([]);

    const searchFunc = (e) => {     
       
        if(e.target.value.length==0)
        {
            setSearchList([])
            return ;
        }        
        fetch(urlToFetch + e.target.value, {
            method: "GET",
            mode: 'cors',
            headers: {}
        })
        .then(res => res.json())
        .then(json => {
                console.log(json)
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

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);    

    return (
        <>
            <form>
                <div className='search-box-div'>
                <div className="nav-logo">
                    <Link to={"/"} style={{textDecoration:'none',color:'white'}}>
                        Cinegram
                    </Link>
                </div>
                    <div>              
                    <input className="search-box" placeholder="Search" style={{minWidth:(isMainPage?'800px':'540px')}} onChange={(e) => { searchFunc(e) }} type="text" />                         
                        <div ref={wrapperRef}  className="search-list" style={{minWidth:(isMainPage?'800px':'540px')}} >
                            <SearchListComponent searchList={searchList} setSearchList={setSearchList}/>
                        </div>        
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

        </>
    );

}

export default Componenet;
