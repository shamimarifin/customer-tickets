import React from 'react'

const Footer = () => {
  return (
  
       <div>
         <div className='flex flex-col md:flex-row justify-between gap-5 max-w-[1200px] mx-auto py-5 px-2'>
            <div className='flex-2'>
                <h1 className='font-bold text-2xl mb-2'>CS — Ticket System</h1>
                <p>The CS Ticket System is a simple and efficient web-based application designed to manage customer support requests. It allows users to submit issues or queries, which are stored as tickets that can be tracked and resolved by the support team.</p>
            </div>

            <div className='flex-1'>
                <h1 className='text-xl'>Company</h1>
                <div>
                 <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Our Mission</a></li>
                    <li><a href="#">Contact Saled</a></li>
              
                 </ul>
             
                </div>
            </div>

            <div className='flex-1'>
                <h1>Services</h1>
                <div>
                 <ul>
                    <li><a href="#">Products & Services</a></li>
                    <li><a href="#">Customer Stories</a></li>
                    <li><a href="#">Download Apps</a></li>
                 </ul>
             
                </div>
            </div>

            <div className='flex-1'>
                <h1>Information</h1>
                <div>
                 <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Join Us</a></li>
                    <li><a href="#">About</a></li>
                 </ul>
             
                </div>
            </div>

            <div className='flex-1'>
                <h1>Social Links</h1>
                <div>
                 <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">About</a></li>
                 </ul>
             
                </div>
            </div>
        </div>

        {/* Copyright */}

        <div className='text-center py-5'>
            <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
       </div>

  )
}

export default Footer