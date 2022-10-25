const express = require('express');
const cors = require('cors');
const app = express();

// 
app.use(cors())

const courses = require('./Data/serverdata.json')

app.get('/',(req,res)=>{
    res.send(courses)
})

const port = 5000;

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})

