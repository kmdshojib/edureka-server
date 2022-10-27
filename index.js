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
app.get('/coursedetails/:id',(req,res)=>{
    const id = req.params.id
    const seleccourse = coursedetails.find(course => course.id === id)
    res.send(seleccourse)

})

const port = 5000;

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})

