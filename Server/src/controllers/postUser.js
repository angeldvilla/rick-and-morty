const { User } = require("../DB_connection");

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send("Missing Data");
    }

    const newUser = await User.findOrCreate({where: { username, password }});
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};