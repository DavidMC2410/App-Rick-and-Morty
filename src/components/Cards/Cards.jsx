import Card from '../Card/Card.jsx'
import style from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return <div className={style.Cards}>
         {characters.length === 0 ? 
         (<p className={style.mensaje}>Usa el portal!</p>)
         :(characters.map(charact => <Card key={charact.name} id={charact.id} name={charact.name} species={charact.species} gender={charact.gender} image={charact.image} onClose={() => props.onClose(charact.id)}/>))

            
         }
   </div>;
}
