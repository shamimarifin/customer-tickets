import React, { useState } from "react";

import calendar from "../../assets/calendar.png"
import { toast } from "react-toastify";

const Ticketscard = ({ticket, tasks, setTasks}) => {
  const [isAdded, setAdded] = useState(false)
  const [status, setStatus] = useState(ticket.status);


  const handleTask = (ticketData)=> {
     setStatus(status === "Open" ? "In-Progress" : "Open")

    if(!isAdded){
      setTasks([...tasks, ticketData])
      toast('Ticket added successfully!')
      setAdded(true)
     
    }else{
      toast('Already Added')
    }

  }

  if(isAdded){
    return null
  }

 


  return (

    <div className="shadow-md px-3 py-4 rounded-md"onClick={()=> handleTask(ticket)}>
       <div className="flex justify-between items-center ">
        <div>
          <h1 className="text-md font-bold text-pretty">{ticket.title}</h1>
        </div>
        <div className={`px-4 py-1 rounded-xl ${
            status ==="Open"? "bg-[#B9F8CF]"
            : status === "In-Progress" ? "bg-[#F8F3B9]"
            : "bg-[#F83044]/40" }`}>
          <span className="w-[20px] h-[20px] bg-[#02A53B] rounded-full"></span>
          <span className="font-semibold">{status}</span>
        </div>
      </div>
      <div>
        <p className="text-gray-400 my-3">
          {ticket.description}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <span className="mr-2">#{ticket.id}</span>
          <span>{ticket.priority}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="mr-5">{ticket.customer}</span>
          <img src={calendar} alt="" className="w-[15px] mr-2"/>{ticket.createdAt}
        </div>
      </div>
    </div>
  );
};

export default Ticketscard;
