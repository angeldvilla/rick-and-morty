import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import style from './detail.module.css'
import swal from 'sweetalert';
import axios from "axios";


const Detail = () => {
    const { id } = useParams();

    const [character, setCharacter] = useState({}); 

    const showErrorAlert = () => {
      swal({
        title: "There are no characters with that ID",
        icon: "warning",
      });
    };

    useEffect(() => {
        /* const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const API_KEY = "8e8760abcfca.59ff7f96a5921ddca147"; */
        /* `${URL_BASE}/character/${detailId}?key=${API_KEY}` */

        axios(`http://localhost:3001/rickandmorty/character/${id}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              showErrorAlert();
            }
          })
         
        return setCharacter({});
      }, [id]);

    return(
      <div className={style.container} >
        <div className={style.card}>

            <div>
              <button>
                  <Link to='/home' className={style.link} >BACK</Link>
              </button>
              <h1>{character?.name}</h1>
            </div>

            <div className={style.detail} >
              <div className={style.containerImg} >
                <img src={character?.image} alt={character?.name} />
              </div>

              <div className={style.titulos}>
              <label htmlFor="status" >ID: </label>
                <p className={style.id}>{character?.id}</p>
                <label htmlFor="status" >Status: </label>
                <p className={style.estado}>{character?.status}</p>
                <label htmlFor="specie">Specie: </label>
                <p className={style.especie}>{character?.species}</p>
                <label htmlFor="gender">Gender: </label>
                <p className={style.genero}>{character?.gender}</p>
                <label htmlFor="origin">Origin: </label>
                <p className={style.origen}>{character?.origin?.name}</p>
              </div>
            </div>
          </div>
      </div>
  )

}


export default Detail;
