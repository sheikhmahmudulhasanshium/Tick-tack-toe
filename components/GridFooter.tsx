import React from 'react'

const GridFooter = () => {
  return (
    <div className='flex items-center justify-center p-2 space-x-5 font-bold'>
      
                <span className='text-red-900 bg-yellow-400'> Player 1: X </span>
                <span className='text-blue-900 bg-green-200 /'> Player 2: O </span>
            
        
    </div>
  )
}

export default GridFooter
