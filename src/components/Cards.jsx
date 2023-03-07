import Card from './Card';

const Cards = (props) => {
   const { characters } = props;
   return (

   <div>
      {characters.map((person) => {
         return(
            
            <Card 
             name = {person.name}
             species = {person.species}
             gender = {person.species}
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