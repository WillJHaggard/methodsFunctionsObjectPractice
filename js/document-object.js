(function() {
    'use strict';
    //Create a variable called msg to hold a message that will
    //be shown on the page
    //Find the title of te document, and put this in the msg var
    var msg = '<p><b>page title: </b>' + document.title + '<br />';
    //Find the URL of the document and add it to the msg variable
    msg += '<b>page address: </b>' + document.URL + '<br />';
    //Find the date the document was lsat modified and add it to
    //the msg var
    msg += '<b>last modified: </b>' + document.lastModified + '</p>';

    //Create a var called el to hold the lement whose id attribute
    //has a value of footer
    var el = document.getElementById('footer');
    //Write the message into that element
    el.innerHTML = msg;
}) ();
