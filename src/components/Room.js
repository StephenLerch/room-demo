import React, {useState} from 'react';
import './Room.css';
import Light from './Light';
import Switch from './Switch';

function Room() {
  const [switched, setSwitched] = useState(false);

  const handleStatusChange = (status) => {
    setSwitched(status => !status);
  };

  return (
    <div className="room-container">
      <div className="room">
        <Light status={switched} />
        <Switch status={switched} handleClick={handleStatusChange} />
      </div>
    </div>
  );
}

export default Room;
