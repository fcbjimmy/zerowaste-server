const { DataTypes } = require("sequelize");
const sequelize = require("../db/database");
const Product = require("./Product");

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      isEmail: true, //checks for email format
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "user"),
      defaultValue: "user",
    },
  },
  { timestamps: true }
);

module.exports = User;

User.hasMany(Product, {
  foreignKey: "userId",
  sourceKey: "id",
});

Product.belongsTo(User, {
  foreignKey: "userId",
  targetId: "id",
});
