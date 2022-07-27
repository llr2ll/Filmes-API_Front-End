import React from 'react';
import './film.css';
import { useLocation } from "react-router-dom";

function Film() {
  
  const film = useLocation().state;
  
  return (
    <>
          <img className='banner' src={film.movie_banner} />
        
          <div className='about'>
              <div>
                  <img src={film.image} />
              </div>
              <div className='about-txt'>
                  <h1>{film.title}</h1>
                  <p>{film.description}</p>
                  <h2>Diretor: {film.director}</h2>
                  <h2>Produtor: {film.producer}</h2>
              </div>
          </div>
        
    </>
  );
}

export default Film;