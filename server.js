const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors')
const cookieParser = require("cookie-parser");
const path = require('path')
const axios = require('axios')

app.use(cors());
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());
// middleware 
app.use(cookieParser());

app.post('/fetch', async (req, res)=>{
    try{
        const url = req.body.url;
        console.log(url)
        const data = await axios.get(url); 
        console.log(data.data)
        res.json(data.data);
    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
    
})

const port = process.env.PORT;
// const port = 8090;
const start = async ()=>{
    try{
        const server = app.listen(port, ()=> console.log(`App is listening on port ${server.address().port}`));
    } catch(err){
        console.log(err)
    }
}


start()

