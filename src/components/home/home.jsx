import React from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import logo from '../img/netflix.png';
import { Link } from "react-router-dom";
import './home.css';

function Home({data}) {
  
  const [isActive, setIsActive] = React.useState(false);

  function toggle() {
    setIsActive(current => !current)
  }
  
  return (
    <main id='home'>
      
        <div className='home-nav'>
          <div className='nav-left'>
                <Link to="/"><button className='logo-bnt'><img className='logo-left' src={logo} /></button></Link>
            </div>
            <div className='nav-right'>
                <span className='spacer'></span>
                <button onClick={toggle} className='btn-right'><BiSearchAlt className='nav-icon' /><h2>Buscar</h2></button>
                <input className={isActive ? 'show' : 'hide'} type='text' placeholder='pesquisar' />
            </div>
        </div>
      
        <img className="home-banner" src="https://image.tmdb.org/t/p/original/kjXdW5H3myRBmTMYgKayjphr2FA.jpg" />
      
    </main>
  );
}

export default Home;
/*
  { data.map((banner) => { 
        {console.log(banner)}
        return <div key={banner.id}>
                  <img src={banner.movie_banner} />
                </div>                
      }
    )
  }
*/