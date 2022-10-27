import { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom'
import './index.css';


const Componenet = ({genresPercentage}) => {

    // var style={}

    useEffect(()=>{
        console.log(genresPercentage)

    },[genresPercentage])
       
    return (
        <>
            <table>
            {
                genresPercentage.map((genre)=>(
                        <tr>
                            <td><div className="item-title">{genre.genre_name}</div></td>
                            <td style={{display:'flex',alignItems:'center',gap:'10px'}}><div className='histogram-item-bar' style={{width:20*genre.count_movie+'px'}}></div> {genre.count_movie}</td>
                        </tr>
                    ))
            }

            </table>
        </>
    );

}

export default Componenet;
