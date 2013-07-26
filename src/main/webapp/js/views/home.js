define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home.html'
], function($, _, Backbone, homeTemplate){
  var HomeView = Backbone.View.extend({
    el: $("#page"),

    // Cache the template function for a single item.
    template: _.template(homeTemplate),

    events: {
    },

    initialize: function() {
      var items = $(".nav li");
      _.each(items, function(item) {
        item.onclick = function(e) {
          $(".active").removeClass("active");
          $(e.target).parent().addClass("active");
        }
      });
    },

    render: function(){
      $(this.el).html(this.template({}));
    }
  });
  
  return HomeView;
});