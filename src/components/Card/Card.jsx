import style from './Card.module.css';
import {Link} from 'react-router-dom';

export default function Card(props) {
   return (
      
      <div className={style.Card}>
         <button className={style.btton} onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`} className={style.noLink}>
          <div className={style.imgAndTitle}>
            <div className={style.Title}>
               <h2>{props.name}</h2>
            </div>
            <div>
               <img  src={props.image} alt={'Carta de '+props.name} /> 
            </div>
         </div>
         <div className={style.generAndSp}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
         </Link>
      </div>
      
   );
}
