const SearchBar = (props) => {
   return (
      <div>
         <input type='search' />
      <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}

//Exportación de la función
export default SearchBar;