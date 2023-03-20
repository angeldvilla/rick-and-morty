import Cards from './components/Cards/Cards'
import NavBar from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Error from './components/Error404/Error'
import Favorites from './components/Favorites/Favorites'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import Swal from 'sweetalert2'

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
    !access && navigate('/');
   }, [access]);
    


   const showErrorAlert = () => {
    swal({
      title: "No hay personajes con ese ID",
      icon: "warning",
      customClass: {
        container: "my-swal",
      },
    });
  };
    
    const onSearch = (newCharacter) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const API_KEY = "8e8760abcfca.59ff7f96a5921ddca147";

      fetch(`${URL_BASE}/character/${newCharacter}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            /* window.alert('No hay personajes con ese ID'); */
            showErrorAlert();
         }
      });
        
    }

    /* const onClose = (id) => {
      setCharacters(
        characters.filter(character => character.id !== id)
      )
   } */

   const onClose = (id) => {
    swal({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, no podrás recuperar este personaje.",
      icon: "warning",
      buttons: ["Cancelar", "Eliminar"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        setCharacters(characters.filter((character) => character.id !== id));
        swal("El personaje ha sido eliminado!", {
          icon: "success",
        });
      } else {
        swal("El personaje no ha sido eliminado.");
      }
    });
  };
    
  

  return (
    <div className='App' style={{ padding: '25px', alignItems: 'center', textAlign: 'center' }}>
        
        {location.pathname.includes('/home') || location.pathname.includes('/about') || location.pathname.includes('/favorites') ? <NavBar onSearch={onSearch}/> : null}

        {location.pathname.includes('') || location.pathname.includes('/detail/:detailId') ? null : <Error/>}

      <div style={{fdirection: 'row' }}>
      
      <Routes>
        <Route path='/*' element={<Error/>} />
        <Route path='/' element={<Form login={login} />} />
          <Route path='/home'
           element=
          {
          <Cards 
          onClose={onClose}
            characters={characters} />
          } 
          />
          <Route path='/favorites' element={<Favorites />}/>
          <Route path='/about' element={<About />} />
          <Route path='/detail/:detailId' element={<Detail />} />
        </Routes>
      </div>

    </div>
  )
}

//Exportación de la app
export default App;