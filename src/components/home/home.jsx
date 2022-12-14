import React from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import logo from '../img/netflix.png';
import { Link } from "react-router-dom";
import './home.css';

function Home({data}) {

  const [counter, setCounter] = React.useState(0);
  const [isActive, setIsActive] = React.useState(false);
  let movie;

  function toggle() { setIsActive(current => !current) }

  (async function timer(data){
    if(data.length > 0){
      let {movie_banner: Banner} =  data[counter];
      movie = Banner; 
    }
  })(data);
  
  React.useEffect(() => {  
    let interval
    if((data.length > 0)&&(counter < data.length)){
      interval = setInterval(() => {setCounter(counter + 1)}, 3500);
    }else if((data.length > 0)&&(counter === data.length)){
      setCounter(0)
      clearInterval(interval)
    }
     return () => clearInterval(interval)
  }, [counter,data]);

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