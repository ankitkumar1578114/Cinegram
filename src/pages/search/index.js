import { useEffect, useState, useRef } from 'react';
import {Link,useNavigate} from 'react-router-dom'

import BackendUrl from '../../urls';
import './index.css';


const SearchListComponent = ({searchList,setSearchList,currentItem}) =>{
    
    useEffect(()=>{

    },[currentItem])

    return (
        searchList.map((item,key) => (
            <Link
            onClick={()=>setSearchList([])}
            to={
                item.entity_type=='Movie'?
                "/movie/"+item.id:
                "/artist/"+item.id
                } style={{textDecoration:'none',color:'black'}}>               
            <div class='search-list-item' style={{backgroundColor:(key==currentItem?'rgba(0,0,0,0.1 )':'white')}}>
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


    const [currentItem,setCurrentItem] = useState(-1);

    const [searchList, setSearchList] = useState([]);

    const navigate = useNavigate();
    
    const wrapperRef = useRef(null);
    

    //this part is basically used for close the searchList if clicked outside
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
    
        useOutsideAlerter(wrapperRef);    
   

    //this function is basically used for controling key up and key press while iterating searchlist
   const  handleKeyDown = (e)=> {
        if (e.keyCode === 38 ) {
            
            if(currentItem>0)
            setCurrentItem(currentItem-1)
            else if (currentItem==0)
            setCurrentItem(searchList.length-1)

        } else if (e.keyCode === 40) {
            
            if(currentItem<searchList.length-1)
            setCurrentItem(currentItem+1)
            else
            setCurrentItem(0)
        
        }
        console.log(currentItem)
      }

    
    // This part is basically used for searching item if anything changes in search box

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
                // console.log(json)
                setSearchList(json);

        });
       
    }

    //this part is for if searched item is submitted..
    const searchHandle = (e) =>{
        e.preventDefault();
        if(currentItem!=-1){
            if(searchList[currentItem].entity_type=='Movie')            
            navigate('/movie/'+searchList[currentItem].id)
            else
            navigate('/artist/'+searchList[currentItem].id)
        }
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
            <form onSubmit={searchHandle}>
                <div className='search-box-div'>
                <div className="nav-logo">
                    <Link to={"/"} style={{textDecoration:'none',color:'white'}}>
                        Cinegram
                    </Link>
                </div>
                    <div>              
                    <input className="search-box" placeholder="Search" style={{minWidth:(isMainPage?'800px':'540px')}} onKeyDown={handleKeyDown } onChange={(e) => { searchFunc(e) }} type="text" />                         
                        <div ref={wrapperRef}  className="search-list" style={{minWidth:(isMainPage?'800px':'540px')}} >
                            <SearchListComponent searchList={searchList} setSearchList={setSearchList} currentItem={currentItem}/>
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
