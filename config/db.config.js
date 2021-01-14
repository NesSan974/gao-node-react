module.exports = {
  HOST: "localhost",
  USER: "gao",
  PASSWORD: "",
  DB: "gao_node",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};