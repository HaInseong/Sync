sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/controls/common/feeds/FeedItem"
],
function (Controller, JSONModel, FlattenedDataset, FeedItem) {
    "use strict";

    return Controller.extend("sync5.zux02chart01.controller.View1", {
        onInit: function () {
            let oModel = new JSONModel();
            oModel.loadData("../model/data_chart.json");
            this.getView().setModel(oModel);

            //Set Viz Data Set
            let oVizFrame = this.getView().byId("idPieChart");

            let oDataset = new FlattenedDataset({
                // Pie Section
                dimensions: [{
                    name: "skillName",
                    value: "{skillName}"
                }],
                // Pie Section Value
                measures: [{
                    name: 'rate',
                    value: '{rate}'
                }],
                // Pie Data Location
                data: {
                    path: "/newSap"
                }
            });
            oVizFrame.setDataset(oDataset);
            oVizFrame.setModel(oModel);

            // Pie properties
            oVizFrame.setVizProperties({
                title: {
                    text: "Number of employees for the SAP Technology"
                },
                plotArea: {
                    colorPalette: d3.scale.category20().range(),
                    drawingEffect: "glossy"
                }
            });
            let feedSize = new FeedItem({
                uid: "size",
                type: "Measure",
                values: ["rate"]
            }),
            feedColor = new FeedItem({
                uid: "color",
                type: "Dimension",
                values: ["skillName"]
            });
            oVizFrame.addFeed(feedSize);
            oVizFrame.addFeed(feedColor);
        }
    });
});
