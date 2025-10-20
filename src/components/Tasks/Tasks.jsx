import React from 'react'
import Taskcard from '../Taskcard/Taskcard'

const Tasks = ({tasks, removeTask, tickets}) => {
    
  return (
    <div className='md:w-[300px] w-[100%]'>
        <h1 className='font-bold text-2xl'>Task Status</h1>
        <p>Select a ticket to add to Task Status</p>
        {
           tasks.map(task => <Taskcard tickets={tickets} key={task.id} removeTask={removeTask} task={task} ></Taskcard> ) 
        }

       

    </div>
  )
}

export default Tasks