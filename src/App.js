/* COMPONENTES */
import Cards from './components/Cards/Cards'
import NavBar from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Error from './components/Error404/Error'
import Favorites from './components/Favorites/Favorites'
import styles from './components/Card/cardesign.module.css'
/* ------ */


/* HOOKS */
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import swal from 'sweetalert'
/* ------ */

function App () {
  const location = useLocation();
  const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   
   const username = "escarlata.2003@gmail.com";
   const password = "advl03"; 
   

   const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home');
    }
   }
   
   useEffect(() => {
    if(!access && !['/', '/home', '/favorites', '/about'].includes(location.pathname) ){
      navigate('/error404');
    }
   }, [access]);
    


   const showErrorAlert = () => {
    swal({
      title: "There are no characters with that ID",
      icon: "warning",
      customClass: {
        container: "my-swal",
      },
      position: "center",
    });
  };

  const showCharacterEqual = () => {
    swal({
      title: "This character has already been found",
      icon: "warning",
      customClass: {
        container: "my-swal",
      },
      position: "center",
      })
  }
    
    const onSearch = (newCharacter) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const API_KEY = "8e8760abcfca.59ff7f96a5921ddca147";

      fetch(`${URL_BASE}/character/${newCharacter}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
          const existingCharacter = characters.find(character => character.id === data.id);

          if (existingCharacter) {
            showCharacterEqual();
          } 
          
          else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } 
        
          else {
          showErrorAlert();
         }

      });
        
    }

   const onClose = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once removed, it will also be removed from the favorites list.",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        setCharacters(characters.filter((character) => character.id !== id));
        swal("The character has been removed!", {
          icon: "success",
        });
      } else {
        swal("The character has not been removed.");
      }
    });
  };
    
  const randomCharacter = () => {
    const idRandom = Math.floor(Math.random() * 826);
    onSearch(idRandom);
 }

  return (
    <div className='App' style={{ padding: '25px', alignItems: 'center', textAlign: 'center' }}>
        
      { location.pathname === '/' || location.pathname.includes('detail') ? null : <NavBar onSearch={onSearch} />  }
  
      <div style={{flexDirection: 'row' }}>
     
     { location.pathname === '/home' ? 
            (<button className={styles.boton} onClick={randomCharacter}> 
            <br/><br/><br/><br/>
            RANDOM CHARACTHER
            </button>) 
            : null}
      
      <Routes>
        
        <Route path='/' element={<Form login={login}/> }/>

          <Route path='/home'
           element={<Cards onClose={onClose}characters={characters} />} />

          <Route path='/favorites' element={<Favorites />}/>
          <Route path='/about' element={<About />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/error404' element={ <Error /> } />
        </Routes>
      </div>

    </div>
  )
}

//Exportación de la app
export default App;