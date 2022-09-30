// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// define columns
// set up fields and rules for Product model
//id, Integer, Doesn't allow null values, Set as primary key,Uses auto increment
//product_name, string, doesn't allow null values
//price, decimal, Doesn't alow null values, validates that the value is a decimal
//stock, integer, doesn't allow null values, det a default value of 10, validates that the value is numeric
//category_id, integer, references the category model's id

Product.init(
  {
    //id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //product name
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //price
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      }
    },
    //stock
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      }
    },
    //category id
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      }
    }  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
