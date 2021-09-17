module.exports = {
  'type': 'postgres',
  'url': process.env.DATABASE_URL,
  // 'ssl': true,
  'synchronize': true,
  'logging': false,
  'entities': [
    process.env.NODE_ENV === 'production' ? 'build/models/**/*.js' : 'src/models/**/*.ts'
  ],
  'migrations': [
    process.env.NODE_ENV === 'production' ? 'build/migration/**/*.js' : 'src/migration/**/*.ts'
  ],
  'cli': {
    'entitiesDir': 'src/models',
    'migrationsDir': 'src/migration',
  }
}