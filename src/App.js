import style from './App.module.css';
import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards/Cards.jsx'
import { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import About from './components/About/About';
import Detail from './components/Detail/Detail';

function App () {

  const [characters, setCharacters]= useState([]);

    const onSearch= (character)=> {

      let existe = characters.filter((valor) => valor.id == character);
      
      if (characters.length===0||existe.length===0){

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
      <img src='https://occ-0-590-1567.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABekGfcjcxKQH35sJxlr2te1JNYCwXqpovwMvTf4gzZ1ihzzUY0M8YcEijgvL_ClD5aIMWEY-hKIZVmgthEVssV7SthGRm2xVXkuwzpphv6u0.png?r=a66' alt="logoNav" width='400px'  />      
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
