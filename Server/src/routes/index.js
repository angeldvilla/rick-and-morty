/* const express = require('express');
const mainRouter = express.Router(); */

//! IMPORTACION DE DEPENDENCIAS  
const { Router } = require("express");
const mainRoutes = Router();

//! IMPORTACION DE ARCHIVOS 
const { getCharById }  = require('../controllers/getCharById');
const login  = require('../controllers/login');
const postUser = require('../controllers/postUser');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');

//* CREANDO LAS RUTAS 
mainRoutes.get('/character/:id', getCharById);
mainRoutes.get('/login', login);
mainRoutes.post('/login', postUser);
mainRoutes.post('/fav',postFav);
mainRoutes.delete('/fav/:id', deleteFav);


//? EXPORTACION DEL ROUTER
module.exports = mainRoutes;