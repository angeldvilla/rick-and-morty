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
import axios from 'axios'
/* ------ */


function App () {
  const location = useLocation();
  const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   
   const username = "escarlata.2003@gmail.com";
   const password = "advl03"; 
   

   const login = (userData) => {
   /*  if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home');
    } */
    const { username, password } = userData;
   
    const URL = 'http://localhost:3001/rickandmorty/login/';
   
    axios(URL + `?username=${username}&password=${password}`)
    .then(({ data }) => {
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
      });
  }
   
   useEffect(() => {
    if(!access && !['/', '/home', '/favorites', '/about'].includes(location.pathname) ){
      navigate('/error404');
    }
   }, [access]);
    
   
   useEffect(() => {
     // Limpiar clases antiguas
     document.body.classList.remove('login-background', 'home-background', 'favorites-background', 'about-background', 'detail-background');

    // Agregar clase correspondiente a la ruta actual
    if (location.pathname === '/') {
      document.body.classList.add('login-background');
    }  
    if (location.pathname === '/home') {
      document.body.classList.add('home-background');
    } 
     if (location.pathname === '/favorites') {
      document.body.classList.add('favorites-background');
    }  
    if (location.pathname === '/about') {
      document.body.classList.add('about-background');
    }  
    if (location.pathname.startsWith('/detail/')) {
      const id = location.pathname.split('/detail/')[1];
      document.body.classList.add('detail-background');
    } 
    if (location.pathname === '/error404'){
      document.body.classList.add('detail-background');
    }

  }, [location]);


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
    
    const onSearch = (id) => {
    /* const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const API_KEY = "8e8760abcfca.59ff7f96a5921ddca147"; */
    
    /* `${URL_BASE}/character/${detailId}?key=${API_KEY}` */

      /* axios(`http://localhost:3001/rickandmorty/character/${id}`) */
      
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.data)
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
        
      { location.pathname === '/' || location.pathname.includes('detail') ? null : <NavBar onSearch={onSearch} />}
  
      <div style={{flexDirection: 'row' }}>
      
      
      <div className={styles.blurIn}>
      <br/><br/><br/><br/>
      {location.pathname ==='/' || location.pathname !== '/home' || 
       location.pathname === '/favorites' || 
       location.pathname === '/detail/:`${id}`' || location.pathname !== '/about' && (
        <button className={styles.randomChar} onClick={randomCharacter}>RANDOM CHAR
        <img src='https://www.comoaprenderdesenhar.com.br/wp-content/uploads/2020/10/como-desenhar-morty.png' style={{ width: '1.1em', height: '0.9em', 
          marginRight: '-0.1em', marginLeft: '0.3em' }} />
          
           </button> 
  
            )}
      </div>
      <Routes>
        
        <Route path='/' element={<Form login={login}/> }/>

          <Route path='/home'
           element={<Cards onClose={onClose}characters={characters} />} />

          <Route path='/favorites' element={<Favorites />}/>
          <Route path='/about' element={<About />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/error404' element={ <Error /> } />
        </Routes>
      </div>

    </div>
  )
}

//Exportación de la app
export default App;