import styles from './cardesign.module.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { addFavorites, removeFavorites, removeFavoriteCharacter} from '../../redux/action';

const Card = ({onSearch, id, name, species, gender, image, onClose, addFavorites, removeFavorites, removeFavoriteCharacter}) => 
{
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
         addFavorites({id, name, species, gender, image})
      }
   }

   const randomCharacter = () => {
      const idRandom = Math.floor(Math.random() * 826);
      onSearch(idRandom);
   }
   
   return (
      <div className={styles.card} >
           { isFav ? (
               <button className={styles.fav} onClick={handleFavorite}><span class="material-symbols-outlined" style={{color:'red'}}>
               favorite 
               </span>{/* ❤️ */}</button>
            ) : (
               <button className={styles.fav} onClick={handleFavorite}><span class="material-symbols-outlined" style={{color:'white'}}>
               favorite
               </span>{/* 🤍 */}</button>
            )
               }
            <button className={styles.boton} onClick={() => {onClose();removeFavoriteCharacter(id)}} > 
            <span className="material-symbols-outlined">
            cancel</span></button>
     
             <img src={image} alt={name} />
             
               <h2 className={styles.name}>{name}</h2>
               <h2 className={styles.species}>{species}</h2>
               <h2 className={styles.gender}>{gender}</h2> <br/><hr/>
            
               <Link to={`/detail/${id}`} className={styles.link} >
                  <h2 className={styles.details}>Details</h2>
               </Link>
            
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
      },
         removeFavoriteCharacter: (id) => {
         dispatch(removeFavoriteCharacter(id));
     }
    }
}

//Exportación de la función
export default connect(null,mapDispatchToProps)(Card);