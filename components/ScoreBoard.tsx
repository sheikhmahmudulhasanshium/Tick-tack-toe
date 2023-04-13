import React, { useState } from 'react'

const ScoreBoard = () => {
    const [score,setScore]=useState(0)

  return (
    <div className='py-2 bg-green-500 rounded-lg'>
      <h4 className='flex items-center justify-center text-xl font-bold tracking-wide'> Score </h4>
       <div className='flex items-center justify-around px-1 space-x-px font-bold text-black'>
          <h3 className='text-red-800 bg-yellow-400 rounded-lg '> Player 1: {score}</h3>
          <h3>{`<<--------->>`}</h3>
          <h3 className='text-blue-900 bg-blue-200 rounded-lg '> Player 2: {score}</h3>
       </div>
    </div>
  )
}

export default ScoreBoard
