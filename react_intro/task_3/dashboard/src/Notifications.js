// Task 3 Notifications.js

import React from 'react'; // Importing React
import './Notifications.css'; // Importing Notifications.css
import { getLatestNotification } from './utils';

// Functional component Notifications
function Notifications() {
	const handleButtonClick = () => {
    console.log('Close button has been clicked');
};

  return (
    <div className="Notifications" style={{ float: 'right' }}>
	   <button
        style={{
          border: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer',
        }}
        aria-label="Close"
	  onClick={handleButtonClick} >
	  x
	  </button>
      <p>Here is the list of notifications</p> {/* Paragraph with text */}
	<ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification(),}}></li>
      </ul>
    </div>
  );
}

export default Notifications; // Exporting Notifications component
