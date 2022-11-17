const http = require('http');
const app = require("./app")
const dotenv = require('dotenv')


const server = http.createServer(app);

// loading dotenv variables
dotenv.config({path : './config/.env'});
PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})