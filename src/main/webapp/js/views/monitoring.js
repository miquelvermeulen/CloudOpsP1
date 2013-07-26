define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/monitoring.html'
], function($, _, Backbone, monitoringTemplate){
  var MonitoringView = Backbone.View.extend({
    el: $("#page"),

    // Cache the template function for a single item.
    template: _.template(monitoringTemplate),

    events: {
    },

    initialize: function() {
    },

    render: function(){
      $(".nav li").eq(1).remove();
      $(".nav li").eq(1).remove();
      $(".nav .active a").text("Monitoring")
      $(this.el).html(this.template({}));
    }
  });
  
  return MonitoringView;
});