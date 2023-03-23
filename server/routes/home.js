const express = require('express');
const home = express.Router();
const Workout = require('../models/workout')
const mongoose = require('mongoose');
const {
    getWorkout,
    postWorkout,
    singleWorkout,
    deleteWorkout,
    updateWorkout
    } = require('../controllers/workout_controllers')



home.get('/', getWorkout)

home.post('/', postWorkout)

home.get('/:id', singleWorkout)

home.delete('/:id', deleteWorkout)

home.patch('/:id', updateWorkout)


module.exports = home