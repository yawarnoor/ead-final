const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const timeSlotSchema = new Schema(
    {
        startTime: {
            hour:{ type: String, required: true },
            minute: { type: String, required: true }},
        endTime: {
            hour:{ type: String, required: true },
            minute: { type: String, required: true }},
        isBooked: { type: Boolean, required: true },
    }, {timestamps: true}
);

const timeslot = mongoose.model('timeslot' , timeSlotSchema);
module.exports = timeslot;