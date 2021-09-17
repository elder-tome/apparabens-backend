module.exports = {
  'type': 'postgres',
  'url': process.env.DATABASE_URL,
  'ssl': true,
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