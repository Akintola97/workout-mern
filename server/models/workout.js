const mongoose = require('mongoose');


const workoutSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    weight:{
        type: Number, 
        required: true
    },
 
    sets:{
        type: Number, 
        required: true, 
    },
    reps: {
        type: Number, 
        required: true, 
    },
}, {timestamps: true})


module.exports = mongoose.model('Workout', workoutSchema)