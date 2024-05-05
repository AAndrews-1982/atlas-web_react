// src/index.js
// Importing the jQuery library
import $ from 'jquery';

// Waiting on the DOM to fully load before executing the code
$(document).ready(function() {
// Appending a paragraph element with the text 
    $('body').append('<p>This is paragraph 1</p>');
    $('body').append('<p>This is paragraph 2</p>');
    $('body').append('<p>This is paragraph 3</p>');
});
