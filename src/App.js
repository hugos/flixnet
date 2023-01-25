import React, { useState, useEffect } from 'react'
import Search from './Search';
import Show from './Show';
// import { API_KEY } from '../.env'
import './App.css';

const apiKey = process.env.REACT_APP_API_KEY;

// const SHOW_API_URL = `https://api.themoviedb.org/3/search/tv?api_key=603f922cff9526b02ebc5063f7284be7&language=en-US&page=1&query=&include_adult=false`
const SHOW_API_URL = `https://api.themoviedb.org/3/tv/popular?api_key=603f922cff9526b02ebc5063f7284be7&language=en-US&page=1`
  // "https://www.omdbapi.com/?s=man&apikey=4a3b711b";


const App = () => {

  const [loading, setLoading] = useState(true)
  const [shows, setShows] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  // useEffect(() => {
  //   fetch(SHOW_API_URL)
  //     .then(response => response.json())
  //     .then(jsonResponse => {
  //       setShows(jsonResponse.results);
  //       setLoading(false);
  //     });
  // }, []);

    const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://api.themoviedb.org/3/search/tv?api_key=603f922cff9526b02ebc5063f7284be7&language=en-US&page=1&query=${searchValue}&include_adult=false`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse) {
          setShows(jsonResponse.results);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
    };

  return (
    <div className="App">
      <header className="bg-black flex flex-col min-h-screen text-red-600">
        <p className='text-7xl font-bebas mt-20'>
          FLIXNET
        </p>
        <Search search={ search } />
        <div className='flex flex-col h-1/3 '>
          {
            loading && !errorMessage ? (
              <span>loading...</span>
            ) : errorMessage ? (
                <div className=''>"error"</div>
            ) :
            (shows.map((show, index) => (
              <Show key={`${index}-${show.name}`} show={show} />
              
            ))        
              )}
        </div>
      </header>
    </div>
  );
}

export default App;
