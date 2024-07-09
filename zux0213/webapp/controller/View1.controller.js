sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("sync5.zux0213.controller.View1", {
        onInit: function () {
            let oModel = new JSONModel();
            oModel.loadData("../model/data.json");
            this.getView().setModel(oModel);
        },
        onSelect: function(oEvent) {
            let comboBoxSelectedKey = oEvent.getParameter("selectedItem").getKey();
            let oList = this.getView().byId("idList");

            alert(comboBoxSelectedKey)
        
            // 선택된 콤보박스 값에 따라 List의 items 속성 바인딩
            if (comboBoxSelectedKey === "T02") {
                
                oList.bindItems("{/t02List}");
            } else if (comboBoxSelectedKey === "T03") {
                oList.bindItems("{/t03List}");
            }
          
        }
    });
});