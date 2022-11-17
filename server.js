const http = require('http');
const dotenv = require('dotenv')

const app = require("./app")
const { dbConnection } = require("./config/db")



const server = http.createServer(app);

// loading dotenv variables
dotenv.config({path : './config/.env'});

PORT = process.env.PORT

// loading db and server 
  dbConnection();

  server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)

  });