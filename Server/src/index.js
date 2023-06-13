const http = require('http');
const data = require('./utils/data');

http
.createServer((req, res) => {

    // dar permisos al front-end para hacer peticiones
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const { url } = req;
    
    if(url.includes('/rickandmorty/character'))
    {

        const id = url.split('/').at(-1);
        
        const characterFound = data.find((character) => {
            return character.id === +id
         })

        res.writeHead
        (200, 
        {"Content-type": "application/json"})
        return res.end(JSON.stringify(characterFound))
    }
})
.listen(3001)