import React from 'react'
import '../App.css'

function Room({ room }) {

  const { roomNumber } = room;
 
  return (
    <div className='text-4xl font-bold'>
      <ul>
        <li className='border p-4 inline-block'>
          { roomNumber }
        </li>
        <li className='border p-4 inline-block'>
          guest name1
        </li>
      </ul>
    </div>
  )
}

export default Room