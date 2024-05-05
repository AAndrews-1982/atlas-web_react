// Import jQuery and Lodash
import $ from 'jquery';
import _ from 'lodash';

// Function to initialize the button click counter
function initializeCounter() {
  let count = 0;

  // Function to update the counter
  function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }

  // Event listener for the button click
  $('#button').click(updateCounter);
}

// Call the initializeCounter function when the DOM is ready
$(document).ready(initializeCounter);
