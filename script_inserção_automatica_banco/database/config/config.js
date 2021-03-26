module.exports = {

  development: {
    username: 'postgres',
    password: 'cefetSD_2021',
    database: 'database-polem-dev',
    host: 'database-sd-cefet.crorjkbxjyvv.us-east-2.rds.amazonaws.com',
    dialect: 'postgres'
  },
  test: {
    username: 'postgres',
    password: 'postgres',
    database: 'diary',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: 'postgres',
    password: 'cefetSD_2021',
    database: 'database-polem-prd',
    host: 'database-sd-cefet.crorjkbxjyvv.us-east-2.rds.amazonaws.com',
    dialect: 'postgres'
  }

};