import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const Dataform = () => {
   
    const [title, setTitle] = useState('');
    const [weight, setWeight] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    

    

    const handleSubmit= async(e)=>{
        e.preventDefault();
        setTitle("")
        setWeight("")
        setSets("")
        setReps("")
        
        
try {
    const postData = await axios.post('http://localhost:5000', {title, weight, sets, reps})
    // console.log(postData)
} catch (error) {
   console.log(error)
}
      
    }
  




  return (
    <>
    <div className='w-full h-full flex text-center justify-center'>
        <form onSubmit={handleSubmit}>
            
            <h1 className='text-[4vmin]'>Enter Exercise Details</h1>
            <div className='p-1'>   
            <label>
                <h1 className=''>Exercise Name: </h1>
         <input className='rounded-md border border-black' type = 'text' onChange = {e=>setTitle(e.target.value)} value={title} required/>
         </label>
            </div>
            <div className='p-1'>  
           <label>
           <h1 className=''>Weight: </h1>
           <input className='rounded-md border border-black' type = 'text' onChange = {e=>setWeight(e.target.value)} value={weight} required />
           </label>
           </div>
          
           <div className='p-1'>  
           <label>
           <h1 className=''>Sets:</h1>
           <input className='rounded-md border border-black' type = 'text' onChange = {e=>setSets(e.target.value)} value={sets} required/>
           </label>
           </div>
         
           <div className='p-1'>  
            <label>
            <h1 className=''>Reps:</h1>
            <input className='rounded-md border border-black' type = 'text' onChange = {e=>setReps(e.target.value)} value={reps} required/>
            </label>
            </div>
           
            <div className='text-center pt-2'>
                <button className='bg-green-500 rounded-md p-1'>POST</button>
            </div>
        </form>
        </div>
    </>
  )
}

export default Dataform