import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {filterCards, orderCards} from '../../redux/action'
import styles from './favoriteStyle.module.css'

const Favorites = () => {
    const {myFavorites} = useSelector(state => state)
    const dispatch = useDispatch();

    const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
    }

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
    }

    return(
        <div className={styles.nav}>
                <h2>YOUR FAVORITES CARDS!</h2>
                <select onChange={handleOrder}>
                <option value="order" disabled='disabled' >Order By</option>
                <option value="Upward" >Upward</option>
                <option value="Falling">Falling</option>
                </select>

                <select onChange={handleFilter}>
                <option value="filter" disabled='disabled' >Filter By</option>
                <option value="All">All</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
                </select>
             <div className={styles.container}>
            { myFavorites.map((character) => {
                return(
                    <div className={styles.card} key={character.id} >
                    
                    <img src={character.image} alt={character.name} />
                     
                    <h2 className={styles.name}>{character.name}</h2>
                    <h2 className={styles.species}>{character.species}</h2>
                    <h2 className={styles.gender}>{character.gender}</h2> <br/><hr/>
                    
                    <Link to={`/detail/${character.id}`} className={styles.link} >
                        <h2 className={styles.gender}>Details</h2>
                    </Link>
         
                </div>
                    )
                })    
            }
           </div>
     </div>
    )
}

export default Favorites;