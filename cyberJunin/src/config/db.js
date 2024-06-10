// Arquivo de configuração de DataBase
// Sqlite
// Sequelize - Object Relational Mapping (ORM)
//      -> ORM para Node.js que facilita a interação com Banco de dados
//      -> Permite escrever consultas SQL utilizando JavaScript

const { Sequelize } = require('sequelize')
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})

const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('Conexão com SQLite estabelecida.')
    } catch (error) {
        console.error('Erro ao conectar ao SQLite.')
    }
}

module.exports = {
    sequelize,
    connectDB
}