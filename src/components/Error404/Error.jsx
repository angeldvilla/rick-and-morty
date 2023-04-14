import React from 'react';
import style from './error.module.css';
import rickError from '../images/rick-error3.png'


const Error = () => {
 
  return (
      <div className={style.errorContainer}>
        <h1><img src={rickError} />Error 404 <img src={rickError} /></h1>
        <p>The Page Not Found</p>
      </div>
    
  );
}

export default Error;