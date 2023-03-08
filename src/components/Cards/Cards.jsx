import Card from '../Card/Card';
import styles from './cards-style.module.css'

const Cards = (props) => {
   const { characters } = props;
   return (

   <div className={styles.container}>
      {characters.map((person) => {
         return(
            <Card
             key= {person.id}
             name = {person.name}
             species = {person.species}
             gender = {person.gender}
             image = {person.image}
             onClose = {props.onClose}
            />  
         )
      })}
   </div>
   
   )
}

//Exportación de la función
export default Cards;