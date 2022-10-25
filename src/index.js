import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MoiveList from './pages/list/movie'
import ArtistList from './pages/list/artist'
import LanguageList from './pages/list/language'
import CrewList from './pages/list/crew'
import SearchPage from './pages/search'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="language-list">
      {/* <LanguageList></LanguageList> */}
    </div>
    
    <SearchPage/>

    {/* <CrewList></CrewList> */}
    {/* <ArtistList></ArtistList> */}
    {/* <MoiveList></MoiveList> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
