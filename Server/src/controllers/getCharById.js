/* const axios = require("axios");

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

module.exports = { getCharById }; */

const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = (req, res) => {
  //? Se obtiene el id de los parámetros de la solicitud utilizando req.params.id.
  const { id } = req.params;

  //?Se realiza la solicitud a la API utilizando ${URL}${id} para construir la URL completa.
  axios(`${URL}/${id}`)
    .then((response) => response.data)

    //*Si no hay errores, se extraen las propiedades necesarias de response.data y se responde con un JSON que contiene las propiedades solicitadas.
    .then(({status, name, species, origin, image, gender}) => {
      
      if (name) {
        const char = {
          id,
          status,
          name,
          species,
          origin,
          image,
          gender,
        };
        return res.status(200).json(char);
      }

      //*Se maneja la respuesta de la API verificando si salio bien pero no se encontro el personaje buscado.
       return res.status(404).send('Not found');

    })
    .catch((error) => {
      //! En caso de que ocurra un error durante la solicitud a la API, se responde con un status 500 y el mensaje de error correspondiente.
      return res.status(500).send(error.message);
    });
};

module.exports = { getCharById };