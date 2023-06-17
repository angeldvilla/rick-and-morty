/* const express = require('express');
const mainRouter = express.Router(); */

//! IMPORTACION DE DEPENDENCIAS  
const { Router } = require("express");
const mainRoutes = Router();

//! IMPORTACION DE ARCHIVOS 
const { getCharById } = require('../controllers/getCharById');
const { login } = require('../controllers/login');
const { postFav, deleteFav } = require('../controllers/handleFavorites');

//* CREANDO LAS RUTAS 
mainRoutes.get('/character/:id', getCharById);
mainRoutes.get('/login', login);
mainRoutes.post('/fav', postFav);
mainRoutes.delete('/fav/:id', deleteFav);


//? EXPORTACION DEL ROUTER
module.exports = mainRoutes;