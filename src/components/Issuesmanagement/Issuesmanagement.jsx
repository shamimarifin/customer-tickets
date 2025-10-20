import React, { use, useState } from "react";
import Countbox from "../Countbox/Countbox";
import Tickets from "../Tickets/Tickets";
import Container from "../Container/Container";
import Tasks from "../Tasks/Tasks";
import { ToastContainer} from 'react-toastify';
import { Resolve } from "../Resolve/Resolve";

const Issuesmanagement = ({ fetchPromise  }) => {
  const ticketsData = use(fetchPromise);
  const[tickets, setTickets] = useState(ticketsData)
  const [tasks, setTasks ] = useState([])
  const [resolve, setResolve] = useState([])

  const removeTask = (p)=> {
    const filterTask = tasks.filter(ticket => ticket.title !== p.title)
    setTasks(filterTask)
    setResolve([...resolve, p])

  }

 
  return (
    <>
      <Countbox tickets={tickets} resolve={resolve}></Countbox>
      <Container>
        <div className="flex justify-between gap-5 flex-col md:flex-row">
          <Tickets tickets={tickets} tasks={tasks} setTasks={setTasks}></Tickets>
          <div>
            <Tasks tasks={tasks} removeTask={removeTask} tickets={tickets}></Tasks>
            <Resolve resolve={resolve}></Resolve>
          </div>
        </div>
      </Container>
      <ToastContainer />
    </>
  );
};

export default Issuesmanagement;
