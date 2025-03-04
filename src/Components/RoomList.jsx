import React from 'react'
import Room from './Room'

function RoomList({ rooms }) {

  const renderedRooms = rooms.map((room) => {
    return <li key={room.id}><Room room={room}/></li>
  })
  
  return (
    <ul>
      {renderedRooms}
    </ul>
  )
}

export default RoomList
