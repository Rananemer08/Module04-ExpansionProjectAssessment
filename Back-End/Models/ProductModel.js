import sequelize from "../Config/connection.js";
import { DataTypes } from "sequelize";
import User from "./UserModel.js"; 

const Product = sequelize.define("product", {
 title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description:{
    type: DataTypes.STRING,
    allowNull: false,
  },

}, {
  timestamps: true,
});

Product.belongsTo(User);
User.hasMany(Product);

export default Product;

