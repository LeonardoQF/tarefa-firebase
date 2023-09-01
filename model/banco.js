const Sequelize = require("sequelize")
const sequelize = new Sequelize("projetowebaula4", "root", "",{
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
