import style from './App.module.css';
import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards/Cards.jsx'
import { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import img from "../src/assets/tituloGrande.png";

function App () {

  const [characters, setCharacters]= useState([]);

    const onSearch= (character)=> {

      let existe = characters.filter((valor) => valor.id == character);
      
      if (existe.length===0){

        fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((data) => {
           if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
      }else {
        alert("Ya tienes ese personaje")};
      
      }
      function onClose(id){
        setCharacters(characters.filter((elemento)=>elemento.id !== id));
       }
  return (
    <div className={style.contain} style={{ padding: '25px' }}>
      <div className={style.imgtitle}>
      <img src={img} alt="logoNav" width='400px'  />      
      </div>
        <Nav onSearch={onSearch}/>
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/detail/:detailId' element={<Detail />}/>
      </Routes>

    </div>
  )
}


export default App
