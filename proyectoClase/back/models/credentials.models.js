const { DataTypes, INTEGER} = require("sequelize");
const sequelize = require("../database/connect");

const Credentials = sequelize.define(
    "credentials",
    {
        pk_teacher:{
            type: DataTypes.INTEGER,
            primaryKey:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        timestamps: false,
        tableName: "credentials"
    }
);
module.exports = credentials;