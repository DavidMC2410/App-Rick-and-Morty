import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css';
import {Link} from 'react-router-dom'
export default function Nav (props){
    return(
        <nav>
            
            
                <Link to='/home' className={style.links}>Home</Link>

                <Link to='/about'className={style.links}>About</Link>
            
            
            <SearchBar onSearch={props.onSearch}/>
        </nav>
    )
}