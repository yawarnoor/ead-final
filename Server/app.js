const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const TimeSlot = require('./models/TimeSlotSchema')

const Appointment = require('./models/AppointmentSchema')
const dbURI = "mongodb+srv://admin:admin123@cluster0.y7qqkrq.mongodb.net/?retryWrites=true&w=majority";
//const dbURI = "mongodb://admin:admin123@ac-phhcjlt-shard-00-00.y7qqkrq.mongodb.net:27017,ac-phhcjlt-shard-00-01.y7qqkrq.mongodb.net:27017,ac-phhcjlt-shard-00-02.y7qqkrq.mongodb.net:27017/?ssl=true&replicaSet=atlas-qjxm2g-shard-0&authSource=admin&retryWrites=true&w=majority";
const app = express();

mongoose.connect(dbURI)
.then( (result) => {
    app.listen(3001);
    console.log("Connected to Mongo");
});

app.use(cors());
app.use(express.static('uploads'));
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    var data = [];

    TimeSlot.find()
    .then(result => data.push(result)
    )
    .catch(err => console.log(err))
    Appointment.find()
    .then(result => data.push(result)
    )
    .catch(err => console.log(err))

    res.render('Home', {data:data})
});

app.get('/create', (req,res) => {
    res.render('Create');
})

app.post('/create', (req,res) => {
    const timeslot = new TimeSlot(req.body);
    timeslot.save()
    .then((result) => res.redirect('/') 
    )
})

app.get('/available', (req,res) => {
    TimeSlot.find()
    .then(result => {
        console.log(result[0])
        res.render('Available', {data:result[0]});
    })
    .catch(err => console.log(err))
    
})

app.get('/book', (req,res) => {
    res.render('Book')
})

app.post('/book',(req,res) => {
    const appointment = new Appointment(req.body);
    appointment.save()
    .then((result) => res.redirect('/') 
    )
})
app.post('/book/:id', (req,res) => {
    const id = req.params.id;
    TimeSlot.findByIdAndUpdate(id, req.body, {new : true})
    .then((result) => {
        
        res.redirect('/')})
})