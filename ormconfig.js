module.exports = {
  type: 'sqlite',
  database: './src/database/database.test.sqlite',
  entities: [
    'src/entities/*.ts'
  ],
  migrations: [
    process.env.PORT === 5001
      ? 'src/database/migrations/*.ts'
      : 'build/database/migrations/*.js'

  ],
  cli: {
    migrationsDir: 'src/database/migrations',
    entitiesDir: 'src/entities'
  }
}
