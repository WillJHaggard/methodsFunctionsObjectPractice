(function() {
    'use strict';
    //Create a var to hold a random number between1 and 10
    var randomNum = Math.floor((Math.random() * 10) + 1);

    //Create a var called el to hold the element whose id
    //attribute has a value of info
    var el = document.getElementById('info');
    el.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>';


}) ();
