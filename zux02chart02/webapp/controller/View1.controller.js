sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sync5.zux02chart02.controller.View1", {
        onInit: function () {
            let oModel = new JSONModel();
            oModel.loadData( "../model/data_chart.json" );
            this.getView().setModel( oModel );
        },
        onSelectData : function(oEvent){
            let selObj = oEvent.getParameter("data")[0].data;
            console.log( selObj );
            // let allObj = oEvent.getSource().vizSelection();
            
        }
    });
});
