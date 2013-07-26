define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/contact.html'
], function($, _, Backbone, contactTemplate){
  var ContactView = Backbone.View.extend({
    el: $("#page"),

    template: _.template(contactTemplate),

    events: {
      "click #contact-submit": "quotationSubmit"
    },

    initialize: function() {
    },

    quotationSubmit: function(e) {
      //e.preventDefault();
    },

    render: function(){
      $(this.el).html(this.template({}));

      $("#inputContactType").change(function () {
        $("#phone").toggle();
        $("#email").toggle();
        $("#when").toggle();
        $("#between").toggle();
      });

      this.$el.find(".quotation-submit").click(function(e) {

        var contactBy = $("#inputContactType option:selected").val();
        var html = ""
        html += "<br>Thank you for your request. <br><br>";
        if(contactBy == "Phone") {
          html += "We will get in touch with you on specified date and timeslot.<br><br>";
        } else {
          html += "We will get in touch with you shortly.<br><br>";
        }
        html += "Thank you for trusting AXA company.<br><br>";
        html += "Regards<br><br>";
        html += "AXA Car Insurance Dpt<br><br>";
        $(".quotation").html(html);
        
        // var text = 'mailto:hgmusers@gmail.com?subject=';
        // text += escape('AXA - Your car insurance quotation');
        // text += '&body=Hello,%0D%0A';
        // text += '%0D%0A';
        // text += 'We thank you for your request for a quotation.%0D%0A';
        // text += '%0D%0A';
        // text += 'We will get in touch with you shortly.%0D%0A';
        // text += '%0D%0A';
        // text += 'Thank you for trusting AXA company.%0D%0A';
        // text += '%0D%0A';
        // text += 'Regards%0D%0A';
        // text += 'AXA Car Insurance Dpt%0D%0A';

        // window.location=text;


        return false;
      })

      var self = this;
      require(['libs/bootstrap/bootstrap-datepicker'], function (datepicker) {
        $('.datepicker').datepicker();
      });
      
      require(['libs/bootstrap/bootstrap-timepicker.min'], function (timepicker) {
        $('#timepicker1').timepicker();
        $('#timepicker2').timepicker();
      });

    }
  });
  
  return ContactView;
});