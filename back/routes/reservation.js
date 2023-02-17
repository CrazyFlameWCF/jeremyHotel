const express = require('express');
const router = express.Router();

const { reservation, viewAll, confimReservation } = require('../controllers/reservation');


router.route('/register').post(reservation);
router.route('/viewall').get(viewAll);
router.route('/confirmReservation/:id').get(confimReservation);


module.exports = router;