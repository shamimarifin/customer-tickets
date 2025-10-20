import React from 'react'

const Countbox = ({tickets, resolve, tasks}) => {


  const progessingData = tasks.filter(element => element.status == "In-Progress")


  return (
    <div className='max-w-[1200px] mx-auto grid md:grid-cols-2 gap-5 mt-10 grid-cols-1'>

        <div className='bg-linear-65 from-[#632EE3] to-[#9F62F2] flex justify-center items-center flex-col rounded-sm h-[200px] '>
            <h1 className='text-2xl text-white'>In-Progress</h1>
            <h1 className='text-4xl text-white mt-3 font-bold'>{progessingData.length}</h1>
        </div>

          <div className='bg-linear-65 from-[#54CF68] to-[#00827A] flex justify-center items-center flex-col rounded-sm h-[200px]'>
            <h1 className='text-2xl text-white'>Resolved</h1>
            <h1 className='text-4xl text-white mt-3 font-bold'>{resolve.length}</h1>
        </div>
     
    </div>
  )
}

export default Countbox