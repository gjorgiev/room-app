import { useEffect, useState } from 'react'
import './App.css'
import RoomList from './components/RoomList'
import axios from 'axios';

function App() {
  const [rooms, setRooms] = useState([]);

  const fetchRooms = async () => {
    const response = await axios.get('http://localhost:3001/rooms');
    setRooms(response.data)
  }

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <div>
      <RoomList rooms={rooms} />
    </div>
  )
}

export default App
