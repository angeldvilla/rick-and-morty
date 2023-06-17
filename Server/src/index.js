/* SERVER CON WEBPACK */

// const http = require("http");
// const { getCharById } = require("./controllers/getCharById");

// http
//   .createServer((req, res) => {
//     // dar permisos al front-end para hacer peticiones
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     const { url } = req;
//     /* ------------------- */
//     if (url.includes("/rickandmorty/character")) {
//       // Obtener el ID del personaje de la URL
//       const id = url.split("/").at(-1);

//       // Ejecutar el controlador getCharById pasando los parámetros requeridos
//       getCharById(res, +id); //-> +id (parsea el id que llega como string de la URL) 
//     }
//   })
//   .listen(3001);

/* SERVER CON WEBPACK */
/* -------------------------- */



//? SERVER CON EXPRESS

const express = require('express');
const server = express();
const morgan = require('morgan');
const mainRoutes = require('./routes/index');
const PORT = 3001;

//* MIDDLEWARE QUE LLAMA EXPRESS JSON
server.use(express.json());
server.use(morgan('dev'));

//! MIDDLEWARE CREADO 
server.use((req, res, next) => {
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
server.use('/rickandmorty', mainRoutes);


//? EL SERVER ESCUCHA EN EL PORT 3001
server.listen(PORT, () => {
   console.log(`Server raised in port: ${PORT}`);
});