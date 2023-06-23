const app = require('../app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', () => {
    
    /* GET CHAR BY ID  */
    describe('GET /rickandmorty/character/:id', () => {

      it('Responde con status: 200', async () => {
      await agent.get('/rickandmorty/character/1').expect(200);
      });
  

      it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
        const { body } = (await agent.get('/rickandmorty/character/1'))
        
        const propertys = ["id", "name", "species", "gender", "status", "origin", "image"];

        const keys = Object.keys(body);

        propertys.forEach((property) => {
          expect(keys).toContain(property);
        });

        /* OTRA FORMA 
        const response = await agent.get('/rickandmorty/character/1');
        
        const props = ["id", "name", "species", "gender", "status", "origin", "image"];

        props.forEach(prop => {
          expect(response.body).ToHaveProperty(prop);
        })
        */ 
      });
  
      it('Si hay un error responde con status: 500', async () => {
        /* await agent.get('/rickandmorty/character/888').expect(500); */
        const response =  await agent.get('/rickandmorty/character/888')
        expect(response.statusCode).toBe(500);
      });

  });

    /* GET CHAR BY ID  */
/*-----------------------------------------------*/
    
    /* LOGIN */

    describe('GET /rickandmorty/login', () => {
      it('Si se pasa la información de login (email y password) correctas, debes tener acceso a la app', async () => {
        /* const user = {
            username : 'escarlata.2003@gmail.com',
            password : 'advl03',
        };
        const response = await agent.get('/rickandmorty/login').query(user).expect(200);
        expect(response.body).toEqual({ access: true }) */

      /*  const { email , password } = require('../utils/users'); 
          const { body } = await agent.get(`/rickandmorty/login?username={username}&password={password}`) */

         const { body } = await agent.get('/rickandmorty/login?username=escarlata.2003@gmail.com&password=advl03');

         expect(body.access).toEqual(true);
      });


      it('Si se pasa la información de login (email y password) incorrectas, deberias tener error de acceso a la app', async () => {
     /*    const user = {
            username : 'hello@example.com',
            password : 'asdasdasdas23',
        };
        const response = await agent.get('/rickandmorty/login').query(user).expect(400);
        expect(response.body).toEqual({ access: false })
      }); */

      const { body } = await agent.get('/rickandmorty/login?username=escarlata.2003@gmail.com&password=advl03233');

      expect(body.access).toEqual(false);

    });
  })
    /* LOGIN */
/*-----------------------------------------------*/

    /* POSTFAV */
    describe('POST /rickandmorty/fav', () => {
      const char1 = {
        id: 1,
        name: 'Lual',
      };
  
      const char2 = {
        id: 2,
        name: 'Malu',
      };

      it('Debe guardar el personaje en favoritos', async () => {
        
          const { body } = await agent.post('/rickandmorty/fav').send(char1).expect(200);
          expect(body).toContainEqual(char1);

      });

      it('Debe agregar personajes a favoritos sin eliminar los existentes', async () => {
        
          const { body } = await agent.post('/rickandmorty/fav').send(char2).expect(200);
          
          expect(body).toContainEqual(char1);
          expect(body).toContainEqual(char2);
      });
    
  });

    /* POSTFAV */
/*-----------------------------------------------*/
    
    /* DELETE FAV */
    
    describe('DELETE /rickandmorty/fav/:id', () => {
      
      const char1 = {
        id: 1,
        name: 'Lual',
      };
  
      const char2 = {
        id: 2,
        name: 'Malu',
      };

      const char3 = {
        id: 3,
        name: 'Lil Revicxx',
      };

      /* beforeAll(async () => {
        await agent.post('/rickandmorty/fav').send(char1).expect(200);
        await agent.post('/rickandmorty/fav').send(char1).expect(200);
      }) */
        
        it('En caso de que no haya ningún personaje con el ID que envías, se devuelve el mismo arreglo', async () => {
          
            const { body } = await agent.delete(`/rickandmorty/fav/888`).expect(200);
            
            expect(body).toContainEqual(char1);
            expect(body).toContainEqual(char2);
        });

        it('Cuando envías un ID válido se elimina correctamente el personaje', async () => {
          
            const {body} = await agent.delete(`/rickandmorty/fav/3`).expect(200);

            expect(body).not.toContainEqual(char3);
        });
    });

     /* DELETE FAV */

});