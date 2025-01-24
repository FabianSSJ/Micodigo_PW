const { Sequelize } = require("sequelize");

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize("semanadiez", "root", "1150493110F", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

// Probar la conexión a la base de datos
(async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexión a la base de datos exitosa.");
    } catch (error) {
        console.error("Error al conectar con la base de datos:", error);
    }
})();

module.exports = sequelize;
