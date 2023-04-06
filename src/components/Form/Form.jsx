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
            <div className={style.img}>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png' alt='Login' />
            </div>
            <label htmlFor='username' className={style.usernameLabel}>
              USERNAME:
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
              PASSWORD:
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
            <button className={style.loginButton}>LOGIN</button>
          </div>
          </div>
        </form>
      );
}

export default Form;