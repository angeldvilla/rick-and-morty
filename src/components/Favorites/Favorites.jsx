import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from './favoriteStyle.module.css'

const Favorites = () => {
    const {myFavorites} = useSelector(state => state)
    return(
        <div className={styles.container}>
        {
            myFavorites.map((character) => {
                return(
                    <div className={styles.card} key={character.id} >
                    
                      <img src={character.image} alt={character.name} />
                     
                        <Link to={`/detail/${character.id}`} className={styles.link} >
                           <h2 className={styles.name} >{character.name}</h2>
                        </Link>
                     
         
                        <h2 className={styles.species} >{character.species}</h2>
                        <h2 className={styles.gender} >{character.gender}</h2>
         
                  </div>
                )
            })    
            }
         
        </div>
    )
}

export default Favorites;