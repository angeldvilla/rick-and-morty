const { User } = require("../DB_connection");

module.exports = async (req, res) => {
  try {
    const { username, password } = req.query;

    if (!username || !password) return res.status(400).send("Missing data");

    const user = await User.findOne({ where: { username } });

    if (!user) return res.status(404).send("User not found");
    
    if (user.password === password) return res.status(200).json({ access: true });
    
    return res.status(403).send("Incorrect Password");

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};