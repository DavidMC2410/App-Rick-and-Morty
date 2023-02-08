import { useState, useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom';
import style from './Detail.module.css';


export default function Detail(){
    const {detailId} = useParams();
    const [character, setCharacter]=useState({});
    const navigate=useNavigate();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

      return (
        <div className={style.contain}>
            
            <button onClick={()=>navigate('/home')} className={style.button}>ATRAS!!</button>


            <div>
                <img src={character.image} alt="imagen de personaje" className={style.imgDetail}/>
            </div>
            <div className={style.textDetail}>
                <h1>{character.name}</h1>
                <h3>Status: {character.status}</h3>
                <h3>Especie: {character.species}</h3>
                <h3>Género: {character.gender}</h3>
                <h3>Origen: {character.origin?.name}</h3>

            </div>

            
        </div>
      );

}