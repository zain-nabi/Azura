const sql = require('mssql')

// Config DB SQL SERVER 2012 LOCAL - Configuracion con SQL SERVER 2012 LOCAL
const config = {
    database: 'Azura',
    authentication: { type: 'default', options: { userName: 'zain', password: 'Djdjegdo786' } },
    server: 'DESKTOP-EERLAR5',
    options: {
        instanceName: 'SQLEXPRESS',
        encrypt: false
    },
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    }
}

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQL SERVER')
    return pool
  })
  .catch(err => console.log('Database error, mal Config: ', err))

module.exports = {
  sql, poolPromise
}

