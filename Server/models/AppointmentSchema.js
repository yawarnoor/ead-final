const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema(
    {
        slotId:{ type: String, required: true },

        userDetails: {
            name:{ type: String, required: true },
            email: { type: String, required: true }},
    }, {timestamps: true}
);

const appointment = mongoose.model('appointment' , appointmentSchema);
module.exports = appointment;