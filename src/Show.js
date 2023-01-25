import React from 'react'
import placeholder from './placeholder-image.png'

const PLACEHOLDER = placeholder;


const Show = ({ show }) => {
    const poster = show.Poster === "N/A" ? PLACEHOLDER : `https://image.tmdb.org/t/p/w500/${show.backdrop_path}`;
    return (
      <div className="max-w-screen-md">
        <h2>{show.name}</h2>
        <div>
          <img
            width="200"
            alt={`The movie titled: ${show.name}`}
            src={poster}
          />
        </div>
        <p>({show.Year})</p>
      </div>
    );
  };
  
  
  export default Show;