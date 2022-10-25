const express = require('express');
const cors = require('cors');
const { application } = require('express');
const app = express();

// 
app.use(cors())

const catagories = require('./Data/categoris.json')

app.get('/catagories',(req,res)=>{
    res.send(catagories)
})

const port = 5000;

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})

