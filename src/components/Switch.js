import React, {useState} from "react";
import './Switch.css';

function Switch(props) {
  const ON = 'On';
  const OFF = 'Off';
  let [switchStatus, setSwitchStatus] = useState(false);

  function switchClicked() {
    setSwitchStatus(status => !status);
    props.handleClick(!switchStatus);
  }

  return (
    <div className="switch-container">
      <div className="switch">
        <button onClick={switchClicked} value={props.status}>
          {switchStatus ? ON : OFF}
        </button>
      </div>
    </div>
  );
}

export default Switch;
