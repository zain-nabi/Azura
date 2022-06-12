const { sql, poolPromise } = require('../database/db')
const fs = require('fs');
var rawdata = fs.readFileSync('src/query/queries.json');
var queries = JSON.parse(rawdata);

class MainController {
  async getVehicle(req, res) {
    try {
      const pool = await poolPromise
      const result = await pool.request().query(queries.getAllData);
      const result2 = await pool.request().input('VehicleID', sql.VarChar, req.body.VehicleID).query(queries.getVehicle);
      const vehiclesValue = result2.recordset;
      const vehicles = result.recordset;
      res.render('vehicles', { vehicles: vehicles,  vehiclesValue : vehiclesValue});
    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }

  async createVehicle(req, res) {
    res.render('create');
  }
  
  async addVehicle(req, res) {
    try {
      const pool = await poolPromise
      const result = await pool.request()
        .input('Make', sql.VarChar, req.body.Make)
        .input('Model', sql.VarChar, req.body.Model)
        .input('Color', sql.VarChar, req.body.Color)
        .input('KM', sql.VarChar, req.body.KM)
        .input('Location', sql.VarChar, req.body.Location)
        .input('Value', sql.VarChar, req.body.Value)
        .query(queries.addVehicle)

        setTimeout(function () {
          res.render('create');
          }, 5000)
    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }

}

const controller = new MainController()
module.exports = controller;