import style from './SearchBar.module.css';
import { useState } from 'react';
export default function SearchBar({onSearch}) {
   const [id, setID]= useState(0);

   const handleSearch = (evento) =>{
      let { value }=evento.target;
      setID(value);
   }

   return (
      <div className={style.searchBar}>
        <input className={style.input} type='search' onChange={handleSearch}/>
      <button className={style.btton} onClick={()=>onSearch(id)}>
      <img src='https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif' alt="logoNav" width='60px'/>
      </button>
      </div>
   );
}
