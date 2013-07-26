define([
  'jquery',
  'chained',
  'underscore',
  'backbone',
  'text!templates/quotation.html',
  'models/data',
  'collections/datas'
], function($, chained, _, Backbone, quotationTemplate, Data,dataCollection){
  var QuotationView = Backbone.View.extend({
    el: $("#page"),

    // Cache the template function for a single item.
    template: _.template(quotationTemplate),

    events: {
      "click #quotation-submit": "submitQuotation",
      "click #quotation-new": "newQuotation",
      "click #quotation-cancel": "cancelQuotation",
      "click #more-info": "moreInfo"
    },

    initialize: function(d) {
    },

    submitQuotation: function(e){
      e.preventDefault();
      $(".quotation").hide();
      this.computeResult();
      $(".results").show();
      var self = this;
      $(".quotation-download").click(self.generatePdf);
    },

    generatePdf: function(e) {
      e.preventDefault();

      require(['libs/jspdf/jspdf.min','libs/filesaver/FileSaver.min','libs/blob/Blob','libs/blob/BlobBuilder'], function (jspdf, filesaver, blob, blobbuilder) {
        var doc = new jsPDF();

        // We'll make our own renderer to skip this editor
        var specialElementHandlers = {
          '.results': function(element, renderer){
            return true;
          }
        };

        // var pdf = $('<div class="ok">');
        // $(pdf).append($(".brand").html());
        // $(pdf).append($(".results").html());

        // $('body').append($(pdf))


        //console.log("pdf",pdf,$(pdf).html());
        //debugger;

        var axalogo = "data:image/jpeg;base64,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"
        
        // doc.setFontSize(40);
        // doc.text(35, 25, "Your Quotation");
        doc.addImage(axalogo, 'JPEG', 120, 8, 75, 15);


        // All units are in the set measurement for the document
        // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
        doc.fromHTML($('.quotation-result').get(0), 15, 35, {
          'width': 170, 
          'elementHandlers': specialElementHandlers
        });
        doc.save('Test.pdf');
      });
    },

    computeResult: function() {

      var makeText = $("#inputMake option:selected").val();
      $("#makeSelected").text(makeText);
      var makeValue = $("#inputMake option:selected").data("ratio");

      var modelText = $("#inputModel option:selected").val();
      $("#modelSelected").text(modelText);
      var modelValue = $("#inputModel option:selected").data("value");

      var insuranceText = $("#inputInsurance option:selected").val();
      $("#insuranceSelected").text(insuranceText);
      var insuranceValue = $("#inputInsurance option:selected").data("ratio");

      var situationText = $("#inputSituation option:selected").val();
      $("#situationSelected").text(situationText);
      var situationValue = $("#inputSituation option:selected").data("ratio");

      $("#resultValue").text( (400 * parseFloat(makeValue) * parseFloat(modelValue) * parseFloat(insuranceValue) * parseFloat(situationValue)).toFixed(2));

    },

    newQuotation: function(){
      document.forms[0].reset();
      $(".quotation").show();
      $(".results").hide();
    },

    cancelQuotation: function() {
      $(".active").removeClass("active");
      $($(".nav li")[0]).addClass("active");
    },

    moreInfo: function() {
      $(".active").removeClass("active");
      $($(".nav li")[2]).addClass("active");
    },

    render: function(ok){

      var dataModel = window.APP.state.models[0];
      var self = this;
      var uniqueModel = _.groupBy(dataModel.attributes.modelsList, "make")

      if (document.forms[0]) {
        document.forms[0].reset();
      }
      $(this.el).html(this.template({
        data: dataModel,
        uniqueModel: uniqueModel,
        _: _
      }));
      $("#inputModel").chained("#inputMake");
    }
  });
  
  return QuotationView;
});