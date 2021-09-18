const router = require('express').Router();
const { prayerRequestController } = require('../controller/prayerRequest.controller');
const authJwt = require('../middleware/authJwt');

router.post('/createRequest', authJwt, prayerRequestController.createPrayerRequest);
router.get('/getmyprayers', authJwt, prayerRequestController.getMyPrayers);
router.get('/getprayer/:id', authJwt, prayerRequestController.getPrayer);
router.delete('/deleteMyPrayers/:id', authJwt, prayerRequestController.deleteMyPrayers);

module.exports = router;
