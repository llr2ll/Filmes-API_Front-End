import React from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import logo from '../img/netflix.png';
import { Link } from "react-router-dom";
import './home.css';

function Home({data}) {
  
  const [isActive, setIsActive] = React.useState(false);
  let movie;





  
  const [counter, setCounter] = React.useState(5);
  let length = data.length;

  React.useEffect(() => {
      const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 3500);
      return () => clearInterval(timer);
      
  }, [counter]);







  (async function getBanner (data) {
       let {movie_banner: Banner} = data[counter];
      movie = Banner;
  }) (data);

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
        <img alt="banner" className="home-banner" src={movie} />
    </main>
  );
}

export default Home;