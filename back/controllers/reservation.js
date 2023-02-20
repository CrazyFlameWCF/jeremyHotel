// const axios = require('axios');
const User = require('../models/User');
const Reservation = require('../models/Reservation');


exports.reservation = async (req, res) => {

  console.log(req.body)
  
  // this is destructuring an object
  const { name, phone, email, location, checkindate, checkoutdate, adult, kid, roomtype, status } = req.body;

  if ( !status === 'new' ) {
    // Wrong validation - adjusted
    console.log(`new reservation does not exist`)
    return res.json({
      success: false,
      message: 'please provide all information'
    })
  }

  try {
    
    const reservation = new Reservation(req.body);
    await reservation.save();

    

    res.json({
      success: true,
      reservation
    })

  } catch (e) {
    console.log(e)
  }

}

exports.viewAll = async (req, res) => {

  try {
    let reservations = await Reservation.find({});
      res.json({
        success: true,
        reservations
      })
  } catch (e) {
    console.log(e)
  }

}

exports.confirmReservation = async (req, res) => {
  console.log(req.params.id, req.body)

  let newStatus = req.body.status
  try {
    let reservation = await Reservation.findByIdAndUpdate(req.params.id, {status: newStatus});
    reservation.save();
    res.json({
      success: true,
      reservation
    })
  } catch (e) {
    console.log(e)
  }

}


