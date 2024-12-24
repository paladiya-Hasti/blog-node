const User = require('../models/userModel');

exports.signup = async (req, res) => {
  try {
  if(email.length > 0 &&
    password.length > 7 &&
    username.length > 7
  ){
    res.status(201).json(newUser);}
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


