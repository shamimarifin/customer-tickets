import React from 'react'
import Ticketscard from '../Ticketscard/Ticketscard'

const Tickets = ({tickets, tasks, setTasks , resolve, setResolve}) => {

  return (
     <div className='w-[1050px]'>
        <h1 className='font-bold text-2xl'>Customer Tickets</h1>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
            {
            tickets.map(ticket=> <Ticketscard tasks={tasks} setTasks={setTasks} ticket={ticket}></Ticketscard>)
        }
        </div>
    </div>
  )
}

export default Tickets