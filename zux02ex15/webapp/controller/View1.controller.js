sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sync5.zux02ex15.controller.View1", {
        onInit: function () {
            let oModel = new JSONModel();
            oModel.loadData("../model/sap_data.json");
            this.getView().setModel(oModel)
        },
        onItemClick: function(oEvent) {
            let oSource = oEvent.getSource();
            // alert(oSource)
            let oContext = oSource.getBindingContext();
            // alert(oContext)
            let sPath = oContext.getPath();
            // alert(sPath)
            let oTable = this.getView().byId("tableId");
            oTable.bindElement(sPath);
        }
    });
});
