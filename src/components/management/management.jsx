import React from 'react';
import './management.css';
import axios from "axios";
import { BsTrash } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import {baseUrl} from '../../App';

function Management({ props }) {

  console.log(baseUrl);

  const navigate = useNavigate();

  const filmesFaltantes = (catalogo1, catalogo2) => {
      const faltantes = catalogo1.filter(
        (itemCatalogo) => (catalogo2.find(item => item.id === itemCatalogo.id) === undefined)
      )
  
      return faltantes;
  }

    function deleteData(id) {
      axios.delete(`${baseUrl}/films/${id}`)
           .then( () => {navigate('/');} )
           .catch((error) => { console.log(error) })
    } 

  function addData(film) {
      axios.post(baseUrl, {id:film.id, title: film.title,image: film.image, movie_banner: film.movie_banner, description: film.description,director: film.director, producer: film.producer})
           .then(() => {navigate('/management');})
           .catch((error) => { console.log(error); });
  }
  
  return (
    <main>

      <h1 className='text-1'>Adicionar Filme</h1>
      <div id='management'>
        { filmesFaltantes(props.herokuData, props.data).map( (film) => {
                  return <div className='management' key={film.id}>
                            <img alt='film img' src={film.image} />
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
                          <img alt='film img' src={film.image} />
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