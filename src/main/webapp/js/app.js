// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'collections/datas'
], function($, _, Backbone, Router, Data){
  var initialize = function(){
    Data.fetch({
      success: function(d){
        window.APP.state = d;
        Router.start(d);
      }
    });
  }
  
  return {
    initialize: initialize
  };
});
