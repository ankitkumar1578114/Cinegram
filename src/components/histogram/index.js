import { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom'
import './histogram.css';


const Componenet = ({genresPercentage}) => {

    // var style={}

    useEffect(()=>{
        console.log(genresPercentage)

    },[genresPercentage])
       
    return (
        <>
            <table style={{display:'flex',alignItems:'flex-end'}}>
            {
                genresPercentage.map((genre)=>(
                        <tr>
                            <td>  {genre.count_movie}<div className='histogram-item-bar' style={{height:200*(genre.count_movie/genresPercentage[0].count_movie)+'px'}}></div></td>
                            <td style={{maxWidth:'30px'}}><div className="item-title" >{genre.genre_name}</div></td>

                        </tr>
                    ))
            }

            </table>
        </>
    );

}

export default Componenet;
