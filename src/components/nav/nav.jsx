import React from 'react';
import Context from '../context';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BiMoon } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';
import { BsPersonFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import Login from '../login/login';
import { Helmet } from 'react-helmet';

function Nav() {

  const [color, setColor] = React.useState(false);
  let { modal, setModal } = React.useContext(Context);
  let background = '#141414';

  function light() { setColor(current => !current) }

  if (color === true) { background = 'd4d4d4'; }

  function toggle() { setModal(current => !current) }

  return (
    <main>
      <nav className={modal ? 'hideNav' : 'showNav'}>
          <Link to={'/'}><AiOutlineHome /></Link>
          <a onClick={light} >
              <BsSun className={color ? 'showSun' : 'hideSun' } />
              <BiMoon className={color ? 'hideMoon' : 'showMoon' } />
          </a>
          <a onClick={toggle}><BsPersonFill /></a>
      </nav>
      <Login />
      <Helmet> <style>{`body { background-color: ${background}; }`}</style> </Helmet>
    </main>
  );
}

export default Nav;