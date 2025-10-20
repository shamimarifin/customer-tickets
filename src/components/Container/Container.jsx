

import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[1200px] mx-auto mt-[80px] mb-[50px] px-2'>
        {children}
    </div>
  )
}

export default Container