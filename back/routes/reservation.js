const express = require('express');
const router = express.Router();

const { reservation, viewAll, confirmReservation } = require('../controllers/reservation');


router.route('/register').post(reservation);
router.route('/viewall').get(viewAll);
router.route('/confirmReservation/:id').put(confirmReservation);


module.exports = router;