const bcrypt = require("bcryptjs");

const comparePasswords = async (password, userPassword) => {
  const validPassword = await bcrypt.compare(password, userPassword);
  return validPassword;
};

module.exports = { comparePasswords };
