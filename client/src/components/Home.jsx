import React from 'react'
import { useEffect, useState, useContext } from 'react'
import {context} from '../context/WorkoutContext'
import axios from 'axios'
import ExerciseData from './ExerciseData'
import Dataform from './DataForm'


const Home = () => {
    const {data, setData} = useContext(context);   
    
useEffect(()=>{
  const fetchData = async() => {
    const response = await axios.get('http://localhost:5000/')
    setData(response.data)

  }

  fetchData()
 
}, [])
  
  
  return (
    <>
      <div className=''>
    <Dataform />
    </div>
    <div className='flex flex-wrap mt-10'>
    {data.map((exercise)=>{
      return (<ExerciseData key = {exercise._id} element = {exercise} />)
    })}
    </div>
    
    
  </>
  )
 
}

export default Home