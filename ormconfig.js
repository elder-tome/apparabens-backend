module.exports = {
  'type': 'mysql',
  'host': process.env.MYSQL_HOST,
  'port': process.env.MYSQL_PORT,
  'username': process.env.MYSQL_USER,
  'password': process.env.MYSQL_PASSWORD,
  'database': process.env.MYSQL_DATABASE,
  'synchronize': true,
  'logging': false,
  'entities': [
    process.env.WEB_ENVIRONMENT === 'dev' ? 'src/models/**/*.ts' : 'build/models/**/*.js'
  ],
  'migrations': [
    process.env.WEB_ENVIRONMENT === 'dev' ? 'src/migration/**/*.ts' : 'build/migration/**/*.js'
  ],
  'cli': {
    'entitiesDir': 'src/models',
    'migrationsDir': 'src/migration',
  }
}