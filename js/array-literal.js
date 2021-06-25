var colors;
colors = ['white', 'black', 'custom'];

var el = document.getElementById('colors');
el.textContent = colors[0];

var itemsThree;
itemsThree = colors[2];

//Update the third element from the array//
colors[2] = 'beige';

//Get the element with an ID of colors//
var el = document.getElementById('colors');

//Replace with third item from the array
el.textContent = colors[2];