const $ = require('jquery');
const electron = require('electron');

function test () {
  console.log('testing');
};

$('button').on('click', test);
