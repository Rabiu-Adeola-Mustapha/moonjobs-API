const mongoose = require('mongoose');


const dbConnection = async() => {
 
    try {

             mongoose.connect("mongodb://127.0.0.1:27017/moonjobs");

             console.log("DataBase connected");

        }
        catch(err){
            
            console.log(err)
            process.exit(1);
        }
    

    
}

module.exports = { dbConnection };