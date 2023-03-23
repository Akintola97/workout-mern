const { default: mongoose } = require('mongoose');
const Workout = require('../models/workout');

//Get workout 

const getWorkout = async (req, res)=>{
    const workouts = await Workout.find({

    }).sort({createdAt: -1}) //This is sorted in descending order.

    res.status(200).json(workouts)
}


//Post Workout 

const postWorkout = async (req, res)=>{
    const {title, weight, sets, reps} = req.body
    try {
        const workout = await Workout.create({title, weight, sets, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


//Get single workout

const singleWorkout = async(req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Workout doesn't exist"})
    }


    const workout = await Workout.findById(id)

    if (!workout){
        return res.status(400).json({error: 'No workout found'})
    }
    else{
        res.status(200).json({workout})
    }
}

//Delete Workout
const deleteWorkout = async(req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Workout doesn't exist"})
    }


    const workout = await Workout.findOneAndDelete({_id: id})

    if (!workout){
        return res.status(400).json({error: 'No workout found'})
    }
    else{
        res.status(200).json(workout)
    }
}

//Update Workout
const updateWorkout = async(req, res)=>{
    const {id} = req.params
   

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Workout doesn't exist"})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!workout){
        return res.status(400).json({error: 'No workout found'})
    }
    else{
        res.status(200).json(workout)
    }
}


module.exports = {
    getWorkout, postWorkout, singleWorkout, deleteWorkout, updateWorkout
}


