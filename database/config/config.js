require('dotenv').config();

// dialect can be changed to 'mysql' if it is preferred
// set your DATABASE_URL and DATABASE_URL_TEST in .env file for your production and test database
module.exports = {
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres'
  },
  test: {
    use_env_variable: 'DATABASE_URL_TEST',
    dialect: 'postgres'
  },
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DEVDB,
    host: process.env.DB_HOST,
    port: 5432,
    dialect: 'postgres'
  }
};
