const axios = require("axios");

const getCharById = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then(({name, gender, species, origin, image, status}) => {
      // creo el objeto para las propiedades del personaje
      const character = {
        id,
        name, 
        gender,
        species,
        origin, 
        image, 
        status 
      };
      // se envia la respuesta JSON con el personaje obtenido
      return res
        .writeHead(200, { "Content-type": "application/json" })
        .end(JSON.stringify(character))
    })
    .catch((error) => {
      // caso de error se envia respuesta de texto de el error
      return res
        .writeHead(500, { "Content-type": "text/plain" })
        .end(error.message)
    });
};

module.exports = { getCharById };
