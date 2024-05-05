// Task 0 - src/index.js
// Importing the jQuery library
import $ from 'jquery';

// Waiting on the DOM to fully load before executing the code
$(document).ready(function() {
// Appending a paragraph element with the text 
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<p>Copyright - Holberton School</p>');
});
