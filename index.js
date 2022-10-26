const express = require('express');
const cors = require('cors');
const app = express();

// 
app.use(cors())

const courses = require('./Data/serverdata.json')
const coursedetails = require('./Data/courseDetails.json')

app.get('/',(req,res)=>{
    res.send(courses)
})
app.get('/coursedetails/:name',(req,res)=>{
    const name = req.params.name
    const seleccourse = coursedetails.find(course => course.name === name)
    res.send(seleccourse)

})

const port = 5000;

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})

