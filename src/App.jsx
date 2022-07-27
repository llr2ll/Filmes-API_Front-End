import React from 'react';
import './App.css';
import Home from "./components/home/home";
import Nav from './components/nav/nav';
import Film from './components/film/film';
import Catalog from "./components/catalog/catalog";
import Management from "./components/management/management";
import Footer from './components/footer/footer';
import Context from './components/context'
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {

  const [herokuData, setHerokuData] = React.useState([])
  const [data, setData] = React.useState([])
  const [modal, setModal] = React.useState(false);
  let props = {herokuData,data}

  React.useEffect(() => {
     axios.get('https://filmes-api-back-end.vercel.app')
          .then((res) => { setData(res.data) })
          .catch((error) => { console.log(error) });
  }, [])

    React.useEffect(() => {
    axios.get('https://ghibliapi.herokuapp.com/Films')
         .then((res) => { setHerokuData(res.data) })
         .catch((error) => { console.log(error) });
  }, [])

  return (
    <>
      <Context.Provider value={{modal, setModal}}>
          <Routes>
            <Route path="/" element={<><Home /><Catalog data={data}/><Footer /></>} />
            <Route path="/management" element={<Management props={props}/>} />
            <Route path="/film/:name" element={<Film />} />  
          </Routes>
          {/*<Nav />*/}
      </Context.Provider>
    </>
  );
}

export default App;