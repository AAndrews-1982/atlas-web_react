// Task 1 - js/dashboard_main.js

import $ from 'jquery';
import _ from 'loadash';

$(document).ready(function() {
    // Function to update the counter
    let count = 0;
    const updateCounter = _.debounce(function() {
        count++;
        $('#count').text(`${count} clicks on the button`);
    }, 500);

    // Add paragraphs, button, and counter
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="startBtn">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    // Bind the updateCounter function to the click event of the button
    $('#startBtn').on('click', updateCounter);
});
