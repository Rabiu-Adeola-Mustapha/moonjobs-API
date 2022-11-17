const {Router} = require('express');

const User = require("../models/users");

// Register user logic => api/v1/Register

const Register = async (req, res) => {
   const { name, email, role, password } = req.body;

   if (!name || !email || !role || !password ) return res.send.json({
    status : 400,
    message : "Please enter all fields correctly"
   }); 

   const user = await User.create({
      name,
      email,
      role,
      password
   });

    const token = User.getJwtToken()

   res.status(200).json({
    success : true,
    message : "User registration was a success",
    data : token,
    
   })
}