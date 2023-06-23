import Card from '../Card/Card';
import styles from './cards-style.module.css'

const Cards = ({ characters, onClose }) => {

   return (

      <div className={styles.container}>

      {characters.map(({id, name, status, species, origin, gender, image}) => {
         return (
            <Card
            key={id}
            id ={id}
            name={name}
            status={status}
            species={species}
            origin={origin.name}
            gender={gender}
            image={image}
            onClose={() => onClose(id)}
            />  
         )
      })}
   </div>
   
   )
}

//Exportación de la función
export default Cards;