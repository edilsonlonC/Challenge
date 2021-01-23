module.exports = {
  database: process.env.DB_NAME || 'test',
  port: process.env.PORT || '5432',
  username: process.env.DB_USER || 'dev',
  password: process.env.DB_PASSWORD || 'dev',
  host: process.env.DB_HOST || 'localhost'
}
