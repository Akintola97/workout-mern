import React from 'react'
import axios from 'axios'

const ExerciseData = ({element}) => {

  const handleClick = async()=>{
   const response = await axios.delete('http://localhost:5000/'+ element._id
  )
  console.log(response)

if (response.status === 200){
  alert('The item has been deleted!')
}

window.location.reload()

}






  return (
    <div className='p-5'> 
    <div>
  <h1>Exercise: {element.title}</h1>
  </div>
  <div>
  <h4>Weight: {element.weight}lbs</h4>
  </div>
  <div>
  <h4>Sets: {element.sets}</h4>
  </div>
 <div>
 <h4>Reps: {element.reps}</h4>
 </div>
  <div>
  <h5>Logged at: {element.createdAt}</h5>
  </div>
  <div className='pt-3'>
    <button onClick={handleClick} className='bg-red-500 rounded-md p-1'>Delete</button>
  </div>
  
    </div>
  )
}

export default ExerciseData