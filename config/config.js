module.exports = {
  development: {
    username: "root",
    password: "Passw0rd!",
    database: "travel_db",
    host: "localhost",
    dialect: "mysql",
    // pool: false
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
