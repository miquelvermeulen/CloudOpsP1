define([
  'jquery',
  'underscore',
  'backbone',
  'models/data'
], function($, _, Backbone, dataModel){
  var dataCollection = Backbone.Collection.extend({
    model: dataModel,
    /*url: "rest/details",*/
    url: "data/data.json",
    initialize: function(){
      
      console.log("init data collection", dataModel);
    }

  });

  return new dataCollection;
});
