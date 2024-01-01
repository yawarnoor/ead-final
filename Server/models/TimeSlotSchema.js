const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const timeSlotSchema = new Schema(
    {
        startTime: {type: String, required: true },
        endTime: { type: String, required: true },
        isBooked: { type: String, required: false },
    }, {timestamps: true}
);

const timeslot = mongoose.model('timeslot' , timeSlotSchema);
module.exports = timeslot;