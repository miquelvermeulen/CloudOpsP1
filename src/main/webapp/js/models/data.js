define([
  'underscore',
  'backbone'
], function(_, Backbone) {

  //put interesting things in the model, even validation
  var Data = Backbone.Model.extend({
    initialize: function(){
      console.log("data init")
    },
    url : function() {
      //var base = 'rest/data/all';
      var base = 'data/data.json';
      if (this.isNew()) return base;
      return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
    }
  });
  return Data;

});