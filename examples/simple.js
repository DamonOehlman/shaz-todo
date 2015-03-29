var s = require('shazam/slide');

// include shaz-todo functionality
require('../')(s);

require('shazam')({
  title: 'A simple presentation system',
  slides: [
    'A simple presentation system',
    s().todo('Make the slides')
  ]
});
