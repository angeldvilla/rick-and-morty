import React from 'react';
import style from './error.module.css';

const Error = () => {
  return (
    <div className="error-container">
      <h1>Error 404</h1>
      <p>La página que estás buscando no existe</p>
    </div>
  );
}

export default Error;