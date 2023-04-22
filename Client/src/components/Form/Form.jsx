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
            <div className={style.blurIn}>
            <div className={style.topContainer}>
              <div className={style.wobblehorizontalTop}>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png'alt='Login' /></div>
            
            <label htmlFor='username' className={style.usernameLabel}>
            <div className={style.trackinginexpandforwardbottom}>
            USERNAME:
          
            <img src="https://w0.peakpx.com/wallpaper/667/312/HD-wallpaper-rick-sanchez-c-137-rick-and-morty-rick-sanchez-dan-harmon-blue-head-fecklessabandon-feckless.jpg" 
            style={{ width: '1.8em', height: '1.9em', marginLeft: '0.5em', position: 'relative', marginBottom: '0.5em'}} /> 
        </div>
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
            <div className={style.scaleupbottom}>
              PASSWORD:<img src='https://external-preview.redd.it/QEVgkKEoOCKHUJKexLc9wuuc_8oeEFaMO0J_Ely0rcg.jpg?auto=webp&s=18e3ed363de388eddbfb18f6a047c8663485c2e1' style={{width: '1.5em', height: '1.7em', marginLeft: '0.5em', position: 'relative', marginBottom: '0.5em'}}/>
            </div>
            
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
            <div className={style.rotatehorizontalcenter}>
            <button className={style.loginButton}>LOGIN
            <span class="material-symbols-outlined">
            login
          </span></button>
          </div>
          </div>
        </div>
      </div>
    </form>
      );
}

export default Form;