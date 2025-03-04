import React from 'react'
import '../App.css'

function Room() {
 
  return (
    <div className='text-4xl font-bold'>
      <ul>
        <li className='border p-4 inline-block'>
          room id
        </li>
        <li className='border p-4 inline-block'>
          guest name1
        </li>
      </ul>
    </div>
  )
}

export default Room