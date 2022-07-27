import React from 'react';
import './management.css';
import axios from "axios";
import { BsTrash } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';

function Management({ props }) {

  const filmesFaltantes = (catalogo1, catalogo2) => {
      const faltantes = catalogo1.filter(
        (itemCatalogo) => (catalogo2.find(item => item.id === itemCatalogo.id) === undefined)
      )
  
      return faltantes;
  }

    function deleteData(id) {
      console.log(id)
      axios.delete(`/films/${id}`)
          .then( () => {} )
          .catch((error) => { console.log(error) })
    } 

  function addData(film) {
    axios.post( 'http://localhost:8080/' , {id:film.id, title: film.title, movie_banner: film.movie_banner, description: film.description,producer: film.producer})
      .then(() => {})
      .catch((error) => { console.log(error); });
  }
  
  return (
    <main>

      <h1 className='text-1'>Adicionar Filme</h1>
      <div id='management'>
        { filmesFaltantes(props.herokuData, props.data).map( (film) => {
                  return <div className='management' key={film.id}>
                         <img src={film.image} />
                         <button onClick={() => addData(film)} className='btn-manage'>
                              <AiOutlinePlusCircle className='img1' />
                         </button>
                         </div>
                }
            )
        }
      </div>

      <h1 className='text-2'>Excluir Filme</h1>
      <div id='management'>
        {props.data.map((film) => {
          return <div className='management' key={film.id}>
            <img src={film.image} />
            <button onClick={() => deleteData(film.id)} className='btn-manage'>
              <BsTrash className='img2' />
            </button>
          </div>
        }
        )
        }
      </div>

    </main>
  );
}

export default Management;