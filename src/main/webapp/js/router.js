// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'models/data',
  'collections/datas'
], function($, _, Backbone, Data, dataList){
  var AppRouter = Backbone.Router.extend({
    routes: {
      'quotation' : 'quotation',
      'contact' : 'contact',
      'monitoring' : 'monitoring',
      '*actions': 'home'
    },

    quotation: function(){
      require(['views/quotation'], function (QuotationView) {
        var self = this;
        new QuotationView({}).render(self.data);
      });
    },

    monitoring: function(){
      require(['views/monitoring'], function (MonitoringView) {
        new MonitoringView({}).render();
      });
    },

    home: function() {
      $("#page").unbind();
      require(['views/home'], function (HomeView) {
        new HomeView({}).render();
      });
    },

    contact: function() {
      $("#page").unbind();
      require(['views/contact'], function (ContactView) {
        new ContactView({}).render();
      });
    },

    start: function(d) {
      this.data = d;
      Backbone.history.start();
      return this;
    }
  });
  
  return new AppRouter();
});
