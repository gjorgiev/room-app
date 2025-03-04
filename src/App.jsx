import { useEffect, useState } from 'react'
import './App.css'
import RoomList from './components/RoomList'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from 'axios';
import RoomCreate from './components/RoomCreate';

function App() {
  const [rooms, setRooms] = useState([]);

  const fetchRooms = async () => {
    const response = await axios.get('http://localhost:3001/rooms');
    setRooms(response.data)
  }

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleRoomCreate = async (room) => {
    const { roomNumber, roomType } = room;
    await axios.post('http://localhost:3001/rooms', { roomNumber, roomType })
  }

  return (
    <div>
      <RoomCreate onCreate={handleRoomCreate} />
      <div className='flex m-1'>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
        </div>
      </div>
      <RoomList rooms={rooms} />
    </div>
  )
}

export default App
