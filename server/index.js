const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose')
const hostname = 'localhost';
const port = 5000; 
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home');
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use('/', homeRouter)


mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('The db is started')
}).catch((error)=>{
console.log(error)
})




app.listen(port, hostname, ()=>{
    console.log(`server is running on ${hostname}${port}`)
})



