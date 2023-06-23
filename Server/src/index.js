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
;

const server = require('./app');
const PORT = 3001;

//? EL SERVER ESCUCHA EN EL PORT 3001
server.listen(PORT, () => {
   console.log(`Server raised in port: ${PORT}`);
});