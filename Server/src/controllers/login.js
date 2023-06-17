const users = require("../utils/users");

const login = (req, res) => {
  const { username, password } = req.query;

  const userFilter = users.find((user) => user.username === username && user.password === password)

  if(userFilter) {
    return res.status(200).json({ access: true });
  }

  return res.status(404).json({ access: false });

/*   if (users.email === email && users.password === password) {
    return res.status(200).json({
      access: true
    });
  } else {
    return res.status(404).json({
      access: false
    });
  } */
};

module.exports = { login };
