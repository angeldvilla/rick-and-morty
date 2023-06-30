const { Favorite } = require('../DB_connection');

module.exports = async (req,res) => {

  try {
      const { id, name, status, species, origin, gender, image } = req.body;

      if(!id || !name || !status || !species || !origin || !gender || !image){
        return res.stauts(401).send('Missing Data!');
      }   
      await Favorite.findOrCreate({where:
      {
        id,
        name, 
        status, 
        species, 
        origin, 
        gender, 
        image
      }
    });

      const allFavorites = await Favorite.findAll();

      return res.status(200).json(allFavorites);

    } catch (error) {
    return res.status(500).json({ error: error.message });
    }
 }