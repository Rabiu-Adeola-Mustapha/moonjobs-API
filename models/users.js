const { model, Schema } = require('mongoose');
const validate = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const UserSchema = new Schema({

    name : {

        type : String,
        required : [true, "Please Enter a valid name"],
        minlength : [3, "Minimum length for name three(3) characters"],
        maxlength : [50, "Maximum length is fifty(50) characters"]

    },

    email : {
        type : String,
        required : [true, "Please, Enter your email address"],
        unique : [true],
        validate : [validate.isEmail,"Please, Enter a valid Email address"]
    },

    role : {
        type : String,
        dafault : 'user',
        enum : {
            values : ['user', 'employer'],
            message : ["Please, select a valid role"],
        }
        
    },

    password : {

        type : String,
        minlength : [8, "password must be more than eight(8) characters"],
        required : [true, "Please enter your password"],
        select : false,
    },
    createdAt : {
        type : Date,
        default : Date.now
    },

    resetPasswordToken : String,
    resetPasswordExpire : Date,
},
{
 timestamps : true
});

// Hashing password just before saving to DB
 UserSchema.pre('save', async function(next){

    this.password = await bcrypt.hash(this.password, 10);
  
    next();

 });

// Generating Auth Token
 UserSchema.methods.getJwtToken = async function(req, res, next){
     jwt.signal({
        id : __dirname,
     })
 }

module.exports = model("User", UserSchema);
