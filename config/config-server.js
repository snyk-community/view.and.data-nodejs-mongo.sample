
var cloud = {

  user: process.env.DB_USER,
  pass: process.env.DB_PWD,
  dbhost: process.env.DB_HOST,
  port: process.env.DB_PORT,
  db: process.env.DB_NAME,
  materials: 'mongo.materials',
  models: 'mongo.models'
}

var local = {

  user: '',
  pass: '',
  dbhost: 'localhost',
  port: 27017,
  db:   'mongo-stg',
  materials: 'mongo.materials',
  models: 'mongo.models'
}

module.exports = cloud;

