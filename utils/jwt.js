const jwt = require("jsonwebtoken");

const createJWT = (user) => {
  return jwt.sign(
    { userId: user.id, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
};

module.exports = { createJWT };
