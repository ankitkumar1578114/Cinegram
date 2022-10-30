import {Routes ,Route} from 'react-router-dom'
import BackendUrl from '../../urls';
import './index.css';
import MainPage from '../main'
import PostPage from '../detail/post'
import MoviePage from '../detail/movie'
import ArtistPage from '../detail/artist'

const urlToFetch = `${BackendUrl}/movie/search/`

const Componenet = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/post" element={<PostPage/>} />
                <Route path="/movie/:id" element={<MoviePage/>} />                
                <Route path="/artist/:id" element={<ArtistPage/>} />                
            </Routes>
        </>
    );

}

export default Componenet;



