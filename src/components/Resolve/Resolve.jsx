import React from 'react'
import Rescard from '../Rescard/Rescard'

export const Resolve = ({resolve}) => {
    
  return (

    <div className='md:w-[300px] mt-5 w-[100%]'>
        <h1 className='font-bold text-2xl'>Resolve Task</h1>
       {resolve.length === 0 && <p className='text-gray-500'>No resolved tasks yet.</p>}
       {
           resolve.map(res => <Rescard res={res}></Rescard> ) 
        }
         

    </div>
  
  )
}
