const router = require('express').Router();
const { prayerRequestController } = require('../controller/prayerRequest.controller');
const authJwt = require('../middleware/authJwt');

router.post('/createRequest', authJwt, prayerRequestController.createPrayerRequest);

module.exports = router;
