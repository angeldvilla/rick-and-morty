const http = require('http');
const data = require('./utils/data');

http
.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // dar permisos al front-end para hacer peticiones
    
    if(req.url.includes('/rickandmorty/character'))
    {
        /* console.log(req.url); */
        const id = req.url.split('/').at(-1);
        /* console.log(id); */
        const characterFound = data.find((character) => {
            return character.id === +id
         })

        return res.writeHead
        (200, 
        {"Content-type": "application/json"})
        .end(JSON.stringify(characterFound))
    }
})
.listen(3001)