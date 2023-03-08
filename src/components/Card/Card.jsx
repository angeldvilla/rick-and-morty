import styles from './cardesign.module.css'


const Card = (props) => {

   const {name, species, gender, image, onClose} = props;
      
   return (
      <div className={styles.card}>
         <h2 className={styles.name}>{name}</h2>
         <h2 className={styles.species}>{species}</h2>
         <h2 className={styles.gender} >{gender}</h2>
         <button className={styles.boton} onClick={onClose}> 
         <span class="material-symbols-outlined">
         cancel</span></button>
         <img src={image} alt="" className={styles.img} />
      </div>
   );
}


//Exportación de la función
export default Card;