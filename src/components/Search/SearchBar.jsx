import styles from './search-style.module.css'

const SearchBar = ({onSearch}) => {
   return (
      <div>
       <input className={styles.buscador} type='search' placeholder='Agregar...' />
       <button className={styles.agrega} onClick={onSearch} >
        <span className="material-symbols-outlined">
         person_add</span> 
         </button>
    
      </div>
   );
}


//Exportación de la función
export default SearchBar;