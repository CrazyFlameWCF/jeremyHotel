// const axios = require('axios');
const User = require('../models/User');
const Reservation = require('../models/Reservation');
const sendEmail = require('../utils/sendEmail');


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
  
  let sampleEamil = `
    <h1>this is title</h1>
    <p>this is test email after registering reservation</p>
    <p>name: ${name}</p>
    <p>phone: ${phone}</p>
    <p>email: ${email}</p>
    <p>location: ${location}</p>
    <p>checkIn: ${checkindate}</p>
    <p>checkOut: ${checkoutdate}</p>
    <p>adult: ${adult}</p>
    <p>kid: ${kid}</p>
    <p>room: ${roomtype}</p>
    <p>Thank you for choosing jeremy's hilton website.</p>
  `

  const mailOptions = {
    from: 'noreply@hilton.com',
    to: `${email}`,
    subject: 'Thank you for submitting reservation.',
    text: sampleEamil,
  }

  try {
    
    const reservation = new Reservation(req.body);
    await reservation.save();

    // send Emails here

    await sendEmail(mailOptions)

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

exports.finishedReservation = async (req, res) => {
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

exports.deniedReservation = async (req, res) => {
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


exports.deletedReservation = async (req, res) => {
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

exports.newReservation = async (req, res) => {
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




