import './index.css';
import BackendUrl from '../../../../urls';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

const Componenet = ({movie})=> {

    useEffect(()=>{

    },[])

    return (
            <Link to ={"/movie/"+movie.id} style={{textDecoration:'none'}}  >
                <div className='tpfy-card'>
                    <div className='tpfy-card-details'>
                        <div className='tpfy-card-title'>
                            {movie.title}
                        </div>
                        <div className='tpfy-card-release-year'>
                            {movie.release_year}
                        </div>
                    </div>

                    <div className='tpfy-card-img'>
                        <img src = {movie.google_url} style={{width:'100%',height:'100%', borderRadius: '4px'}}/>
                    </div>
                </div>
            </Link>

    );
}

export default Componenet;
