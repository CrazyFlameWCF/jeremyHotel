const express = require('express');
const router = express.Router();

const { reservation, viewAll, confirmReservation, finishedReservation, deniedReservation, deletedReservation, newReservation } = require('../controllers/reservation');


router.route('/register').post(reservation);
router.route('/viewall').get(viewAll);
router.route('/confirmReservation/:id').put(confirmReservation);
router.route('/finishedReservation/:id').put(finishedReservation);
router.route('/deniedReservation/:id').put(deniedReservation);
router.route('/deletedReservation/:id').put(deletedReservation);
router.route('/newReservation/:id').put(newReservation)


module.exports = router;