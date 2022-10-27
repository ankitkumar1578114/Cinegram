import './index.css';
import BackendUrl from '../../../../urls';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

const Componenet = ({movie})=> {

    useEffect(()=>{

    },[])

    return (
            <Link to = {"/movie?id="+movie.id} style={{textDecoration:'none'}}>
                <div className='tpfy-card'>
                    <div className='tpfy-card-img'>
                        <img src = {movie.google_url} style={{width:'100%',height:'100%', borderRadius: '6px 6px 0 0'}}/>
                    </div>
                    <div className='tpfy-card-title'>
                        {movie.title}
                    </div>
                </div>
            </Link>

    );
}

export default Componenet;
