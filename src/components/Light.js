import React from 'react';
import classNames from 'classnames';
import './Light.css';

function Light(props) {
  const lightClass = classNames({
    light: true,
    'light-on': props.status,
    'light-off': !props.status,
  });

  return (
    <div className="light-container">
      <span className="cord"></span>
      <span className={lightClass}></span>
    </div>
  );
}

export default Light;
