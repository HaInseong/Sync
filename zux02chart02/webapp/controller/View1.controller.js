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

            // VizFrame 설정 ( 차트 제목 )
            let oVizFrame = this.getView().byId("idPiechart");
            oVizFrame.setVizProperties({
                title: {
                    text: "차트 제목 테스트중"
                },
                plotArea: {
                    colorPalette: d3.scale.category20().range(),
                    drawingEffect: "glossy"
                }
            });     
        },
        onSelectData : function(oEvent){
            let selObj = oEvent.getParameter("data")[0].data;
            console.log( selObj );
            // let allObj = oEvent.getSource().vizSelection(); 
            
        }
    });
});
