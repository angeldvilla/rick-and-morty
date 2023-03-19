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
                {/* <h3 className={styles.filter}>FILTERS</h3> */}
               {/*  <div>
                <h2 className={styles.titleFav}>YOUR FAVORITES CARDS!</h2>
                </div> */}
                <select className={styles.select} onChange={handleOrder}>
                <option value="order" disabled='disabled' style={{color:'grey'}}>Order By</option>
                <option value="Upward" style={{color:'black'}} >Upward</option>
                <option value="Falling" style={{color:'black'}} >Falling</option>
                </select>

                <select className={styles.filter} onChange={handleFilter}>
                <option value="filter" disabled='disabled' style={{color:'grey'}}>Filter By</option>
                <option value="All" style={{color:'black'}} >All</option>
               <option value="Male" style={{color:'black'}} >Male</option>
               <option value="Female" style={{color:'black'}} >Female</option>
               <option value="Genderless" style={{color:'black'}} >Genderless</option>
               <option value="unknown" style={{color:'black'}} >unknown</option>
                </select>

             <div className={styles.container}>
             <div>
                <h2 className={styles.titleFav}>YOUR FAVORITES CARDS!</h2>
                </div>
            { myFavorites.map((character) => {
                return(
                    <div className={styles.card} key={character.id} >
                    
                    <img src={character.image} alt={character.name} />
                     
                    <h2 className={styles.name}>{character.name}</h2>
                    <h2 className={styles.species}>{character.species}</h2>
                    <h2 className={styles.gender}>{character.gender}</h2> <br/><hr/>
                    
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