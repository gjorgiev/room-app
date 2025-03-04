import { useState } from 'react';
import Button from '@mui/material/Button';

function RoomCreate({ onCreate }) {
  const [roomNumber, setRoomNumber] = useState('');
  const [roomType, setRoomType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate({ roomNumber, roomType });
    setRoomNumber('');
    setRoomType('');
  }

  const handleRoomNumber = (event) => {
    setRoomNumber(event.target.value);
  }

  const handleRoomType = (event) => {
    setRoomType(event.target.value);
  }

  return (
    <form>
      <label>Room number: </label>
      <input type='number' value={roomNumber} onChange={handleRoomNumber} />
      <select value={roomType} onChange={handleRoomType}>
        <option value='single'>Single bed</option>
        <option value='double'>Double bed</option>
        <option value='twin'>Two single bed</option>
      </select>
      <Button onClick={handleSubmit}>Add Room</Button>
    </form>
  )
}

export default RoomCreate;