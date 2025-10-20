
import React from 'react'
import { toast } from 'react-toastify'

const Taskcard = ({task, removeTask, visibleTickets}) => {

    const handleTask = (p)=> {
        removeTask(p) 
        toast("Completed!")
      console.log(visibleTickets)
    }

  return (
    <>
      <div className='shadow-md px-4 py-2 rounded-md mt-5'>
          <h3 className='font-semibold'>{task.title}</h3>
          <button className='btn bg-[#02A53B] text-white w-[100%] mt-4' onClick={()=> handleTask(task)}>Complete</button>
      </div>
    </>
  )
}

export default Taskcard