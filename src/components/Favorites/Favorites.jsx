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
                <div>
                <h2 className={styles.titleFav}>YOUR FAVORITES CARDS!</h2>
                
                <select className={styles.select} onChange={handleOrder}>
                <option value="order" style={{color:'black'}}>Order By</option>
                <option value="Upward" style={{color:'black'}} >Upward</option>
                <option value="Falling" style={{color:'black'}} >Falling</option>
                </select>

                <select className={styles.filter} onChange={handleFilter}>
                <option value="filter" style={{color:'black'}}>Filter By</option>
                <option value="All" style={{color:'black'}} >All</option>
               <option value="Male" style={{color:'black'}} >Male</option>
               <option value="Female" style={{color:'black'}} >Female</option>
               <option value="Genderless" style={{color:'black'}} >Genderless</option>
               <option value="unknown" style={{color:'black'}} >unknown</option>
                </select> </div>

             <div className={styles.container}>
            { myFavorites.map((character) => {
                return(
                    <div className={styles.card} key={character.id} >
                    
                    <br/> 
                    <img src={character.image} alt={character.name} />
                    <h2 className={styles.name}>{character.name}</h2>
                    <hr/>
                    
                    <Link to={`/detail/${character.id}`} className={styles.link} >
                        <h2 className={styles.details}>Details</h2>
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