import React from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import logo from '../img/netflix.png';
import { Link } from "react-router-dom";
import './home.css';

function Home({data}) {
  
  const [isActive, setIsActive] = React.useState(false);


  
  /*
  const arr = [
    { "value": "abc", "checked": false },
    { "value": "xyz", "checked": false },
    { "value": "lmn", "checked": true }
  ]
  
  const filtered = arr.reduce((a, o) => (o.checked && a.push(o.value), a), [])      
  console.log(filtered)
  

  let array=[[1,2,3],{empresa:"apple",algo:"mango",fruta:"grapes"}]

  console.log(array[1]{"apple"})

  const filtered = data.reduce((a, o) => (o.checked && a.push(o.value), a), [])      
  console.log(filtered)
*/



  function toggle() {
    setIsActive(current => !current)
  }

  return (
    <main id='home'>
      
        <div className='home-nav'>
          <div className='nav-left'>
                <Link to="/"><button className='logo-bnt'><img alt="logo" className='logo-left' src={logo} /></button></Link>
            </div>
            <div className='nav-right'>
                <span className='spacer'></span>
                <button onClick={toggle} className='btn-right'><BiSearchAlt className='nav-icon' /><h2>Buscar</h2></button>
                <input className={isActive ? 'show' : 'hide'} type='text' placeholder='pesquisar' />
            </div>
        </div>
        <img alt="banner" className="home-banner" src="{banner}" />
    </main>
  );
}

export default Home;