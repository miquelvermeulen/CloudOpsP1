// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    chained: 'libs/jquery/jquery.chained',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone.amd',
    bootstrap: 'libs/bootstrap/bootstrap-min',
    text: 'libs/require/text',
    jspdf: 'libs/jspdf/jspdf.amd.min',
    // filesaver: 'libs/filesaver/FileSaver.min',
    // blob: 'libs/blob/BlobBuilder.min',
    templates: '../templates'
  },
  urlArgs: "bust=" +  (new Date()).getTime()  //TODO: cache-buster: remove for production!!!

});

require([

  // Load our app module and pass it to our definition function
  'app'

  // Some plugins have to be loaded in order due to their non AMD compliance
  // Because these scripts are not "modules" they do not pass any values to the definition function below
], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});