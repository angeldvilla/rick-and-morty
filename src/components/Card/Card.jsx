import styles from './cardesign.module.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { addFavorites, removeFavorites } from '../../redux/action';

const Card = ({id, name, species, gender, image, onClose, addFavorites, removeFavorites}) => {
    const [isFav, setisFav] = useState(false);
   const favorites = useSelector(state => state.myFavorites);

   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === id) {
            setisFav(true);
         }
      });
   }, [favorites]);

    const handleFavorite = () => {
      if(isFav) {
         setisFav(false);
         removeFavorites(id);
      }
      else{   
      setisFav(true)
      addFavorites({id, name, species, gender, image, addFavorites, removeFavorites})
      } 
    }

   return (
      <div className={styles.card} >
           { isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
               }
            <button className={styles.boton} onClick={onClose}> 
            <span class="material-symbols-outlined">
            cancel</span></button>
     
             <img src={image} alt={name} />
            
               <Link to={`/detail/${id}`} className={styles.link} >
                  <h2 className={styles.name}>{name}</h2>
               </Link>
            

               <h2 className={styles.species}>{species}</h2>
               <h2 className={styles.gender}>{gender}</h2>

         </div>
   );
}

 const mapDispatchToProps = (dispatch) => {
      return{
         addFavorites : (character) => {
         dispatch(addFavorites(character));
         },
         removeFavorites : (id) => {
         dispatch(removeFavorites(id));
      }
    }
}

//Exportación de la función
export default connect(null,mapDispatchToProps)(Card);