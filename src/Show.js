import React from 'react'
import placeholder from './placeholder-image.png'

const PLACEHOLDER = placeholder;


const Show = ({ show }) => {
    const poster = show.Poster === "N/A" ? PLACEHOLDER : show.Poster;
    return (
      <div className="max-w-screen-">
        <h2>{show.Title}</h2>
        <div>
          <img
            width="200"
            alt={`The movie titled: ${show.Title}`}
            src={poster}
          />
        </div>
        <p>({show.Year})</p>
      </div>
    );
  };
  
  
  export default Show;