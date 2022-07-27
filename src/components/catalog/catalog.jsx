import React from 'react';
import './catalog.css';
import { Link } from "react-router-dom";

function Catalog({data}) {
  return (
    <main id='catalog'>
      { data.map((film) => { 
           return <div className='catalog' key={film.id}>
                      <Link to={`/film/${film.title}`} state={film}>
                            <img src={film.image} />
                      </Link>
                  </div>
          }
        )
      }
    </main>
  );
}

export default Catalog;