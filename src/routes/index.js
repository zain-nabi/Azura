const { Router } = require('express');
const controller = require('../controller/controller')

const router = Router();

router.get('/', controller.createVehicle);
router.post('/create', controller.addVehicle);
router.get('/vehicles', controller.getVehicle);
router.post('/vehicles', controller.getVehicle);

module.exports = router;

