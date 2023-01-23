import React, { useState, useEffect } from 'react'
import Search from './Search';
import Show from './Show';
// import { API_KEY } from '../.env'
import './App.css';

const apiKey = process.env.REACT_APP_API_KEY;

const SHOW_API_URL = `https://api.themoviedb.org/3/search/tv?api_key=603f922cff9526b02ebc5063f7284be7&language=en-US&page=1&query=Lucifer&include_adult=false`
  // "https://www.omdbapi.com/?s=man&apikey=4a3b711b";


function App() {
  return (
    <div className="App">
      <header className="bg-black flex flex-col min-h-screen text-red-600">
        <p className='text-7xl font-bebas mt-20'>
          FLIXNET
        </p>
        <Search />
      </header>
    </div>
  );
}

export default App;
