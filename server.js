const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors')
const cookieParser = require("cookie-parser");
const path = require('path')


// const notFound = require('./middleware/not-found');
// const errorHandlerMiddleware = require('./middleware/error-handler');
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());
// middleware 
app.use(cookieParser());

// const port = process.env.PORT;
const port = 8080;
const start = async ()=>{
    try{
        const server = app.listen(port, ()=> console.log(`App is listening on port ${server.address().port}`));
    } catch(err){
        console.log(err)
    }
}


start()

