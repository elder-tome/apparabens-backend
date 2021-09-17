module.exports = {
  'type': 'postgres',
  'host': process.env.POSTGRES_HOST,
  'port': process.env.POSTGRES_PORT,
  'username': process.env.POSTGRES_USER,
  'password': process.env.POSTGRES_PASSWORD,
  'database': process.env.POSTGRES_DATABASE,
  'synchronize': true,
  'logging': false,
  'entities': [
    process.env.DEV_ENVIRONMENT === 'true' ? 'src/models/**/*.ts' : 'build/models/**/*.js'
  ],
  'migrations': [
    process.env.DEV_ENVIRONMENT === 'true' ? 'src/migration/**/*.ts' : 'build/migration/**/*.js'
  ],
  'cli': {
    'entitiesDir': 'src/models',
    'migrationsDir': 'src/migration',
  }
}