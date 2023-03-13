import styles from './cardesign.module.css'
import { Link } from 'react-router-dom';

const Card = ({id, name, species, gender, image, onClose}) => {
   return (
      <div className={styles.card} >

            
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


//Exportación de la función
export default Card;