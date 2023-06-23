//? SERVER CON EXPRESS
const express = require('express');
const app = express();
const morgan = require('morgan');
const mainRoutes = require('./routes/index');


//* MIDDLEWARE QUE LLAMA EXPRESS JSON
app.use(express.json());
app.use(morgan('dev'));

//! MIDDLEWARE CREADO 
app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});


//* MIDDLEWARE QUE AGREGA EL STRING"/rickandmorty" ANTES DE CADA RUTA
app.use('/rickandmorty', mainRoutes);

module.exports = app;