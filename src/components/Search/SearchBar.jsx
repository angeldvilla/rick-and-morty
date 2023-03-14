import styles from './search-style.module.css'
import { useState } from 'react';

const SearchBar = ({onSearch}) => {
   const [character, setCharacter] = useState('');

   const handleChange = (event) => {
      setCharacter(event.target.value);
   }

   return (
      <div className={styles.search}>
       <input className={styles.buscador} type='search' placeholder='CHARACTER...' value={character} onChange={handleChange} />
      <button className={styles.agrega} onClick={() => onSearch(character)} >ADD
         {/* <span class="material-symbols-outlined">
         search
         </span> */}
      </button> 
    
      </div>
   );
}


//Exportación de la función
export default SearchBar;