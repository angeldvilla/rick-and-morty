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
      
      
      <div>
      <br/><br/><br/><br/>
      {location.pathname ==='/' || location.pathname !== '/home' || 
       location.pathname === '/favorites' || 
       location.pathname === '/detail/:`${id}`' || location.pathname !== '/about' && (
        <button className={styles.randomChar} onClick={randomCharacter}>RANDOM CHAR
          {/* <svg viewBox="0 0 24 24" style={{ width: '1.5em', height: '1.5em', marginRight: '0.5em' }}>
            <path fill="currentColor" d="M12 2.2l2.928 6.167 6.535.953-4.734 4.741 1.115 6.522L12 17.222l-5.845 3.161 1.115-6.522L2.537 9.32l6.535-.953z"></path>
          </svg> */}<span class="material-symbols-outlined" style={{ width: '1.3em', height: '1.5em', 
          marginRight: '-0.2em', marginLeft: '0.1em' }}>
          shuffle
          </span>
           </button> 
  
            )}
      </div>
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