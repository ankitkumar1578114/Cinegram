import BackendUrl from '../../urls';
import './index.css';
import MainPage from '../main'
import PostPage from '../detail/post'
import MoviePage from '../detail/movie'
import {Routes ,Route} from 'react-router-dom'

const urlToFetch = `${BackendUrl}/movie/search/`

const Componenet = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/post" element={<PostPage/>} />
                <Route path="/movie" element={<MoviePage/>} />                
            </Routes>
        </>
    );

}

export default Componenet;



