import { useState } from 'react'
import style from './formStyle.module.css'
import validation from './validation';


const Form = ({login}) => {

const [userData, setUserData] = useState({
    username: '',
    password: ''
});

const [errors, setErrors] = useState({
    username: '',
    password: ''
})

const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserData({
        ...userData,
        [name] : value
    });
    setErrors(validation({
       ...userData,
       [name] : value
    }));
}

 const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
 }

    return (
        <form onSubmit={handleSubmit} className={style.loginContain} autoComplete="off">
          <div className={style.topContainer}>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png' alt='Login' />
          
            <label htmlFor='username' className={style.usernameLabel}>
            USERNAME:<img src="https://simg.nicepng.com/png/small/10-100011_rick-and-morty-rick-and-morty-rick-head.png" style={{ width: '1.5em', height: '1.7em', marginLeft: '0.5em'}}/> 
            </label>
            <input
              autoComplete="off"
              type='text'
              name='username'
              placeholder='hello@example.com'
              value={userData.username}
              onChange={handleInputChange}
              />
              {errors.username && <p className={style.validacion}>{errors.username}</p>}
            
            <label htmlFor='password' className={style.passwordLabel}>
              PASSWORD:<img src='https://www.pngitem.com/pimgs/m/588-5883236_rick-and-morty-face-png-transparent-png.png' style={{width: '1.5em', height: '1.7em', marginLeft: '0.5em'}}/>
            </label>
            <input
             autoComplete="off"
              type='password'
              name='password'
              placeholder='.......'
              value={userData.password}
              onChange={handleInputChange}
            />
            {errors.password && <p className={style.validacion}>{errors.password}</p>}
          <div className={style.bottomContainer}>
            <button className={style.loginButton}>LOGIN
            <span class="material-symbols-outlined">
            login
          </span></button>
          </div>
          </div>
        </form>
      );
}

export default Form;