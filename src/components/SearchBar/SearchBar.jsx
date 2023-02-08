import style from './SearchBar.module.css';
import { useState } from 'react';
import portal from '../../assets/portal-rick-and-morty.gif';
export default function SearchBar({onSearch}) {
   const [id, setId]= useState("");

   const handleSearch = (evento) =>{
      let { value }=evento.target;
      setId(value);
   }
   const handleClick = ()=>{
      onSearch(id);
      setId("");
   }

   return (
      <div className={style.searchBar}>
        <input className={style.input} type='text' onChange={handleSearch} placeholder='Buscar' value={id}/>
      <button className={style.btton} onClick={handleClick}>
      <img src={portal} alt="logoNav" width='60px'/>
      </button>
      </div>
   );
}

