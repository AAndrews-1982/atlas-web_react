// footer.js

import $ from 'jquery';

// Function to initialize the footer content
function initializeFooter() {
  const copyrightText = 'Copyright - Holberton School';
  $('<p>').text(copyrightText).appendTo('#footer');
}

// Call the initializeFooter function when the DOM is ready
$(document).ready(initializeFooter);
