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

app.get('/', (req,res) => {
    res.send("Homepage")
});