sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter"
],
function (Controller, JSONModel, Filter) {
    "use strict";

    return Controller.extend("sync5.zux0222t1.controller.View1", {
        onInit: function () {
            let oSapData = {
                Airline: [
                    { CarrId: "AA", CarrName: "ERP SI Team" },
                    { CarrId: "LH", CarrName: "Lufthansa" }
                ],
                FlightList: [
                    { CarrId: "AA", CarrName: "American Airlines", ConnId: "0017", CityFrom: "NEW YORK", CityTo: "SAN FRANCISCO", Fldate: "2020-10-01", SeatsTot: "423" },
                    { CarrId: "AA", CarrName: "American Airlines", ConnId: "0017", CityFrom: "NEW YORK", CityTo: "SAN FRANCISCO", Fldate: "2020-11-02", SeatsTot: "416" },
                    { CarrId: "AA", CarrName: "American Airlines", ConnId: "0017", CityFrom: "NEW YORK", CityTo: "SAN FRANCISCO", Fldate: "2020-12-04", SeatsTot: "424" },
                    { CarrId: "AA", CarrName: "American Airlines", ConnId: "0064", CityFrom: "SAN FRANCISCO", CityTo: "NEW YORK", Fldate: "2020-10-03", SeatsTot: "356" },
                    { CarrId: "AA", CarrName: "American Airlines", ConnId: "0064", CityFrom: "SAN FRANCISCO", CityTo: "NEW YORK", Fldate: "2020-11-04", SeatsTot: "363" },
                    { CarrId: "AA", CarrName: "American Airlines", ConnId: "0064", CityFrom: "SAN FRANCISCO", CityTo: "NEW YORK", Fldate: "2020-12-06", SeatsTot: "367" },
                    { CarrId: "LH", CarrName: "Lufthansa", ConnId: "0400", CityFrom: "FRANKFURT", CityTo: "NEW YORK", Fldate: "2020-10-04", SeatsTot: "364" },
                    { CarrId: "LH", CarrName: "Lufthansa", ConnId: "0400", CityFrom: "FRANKFURT", CityTo: "NEW YORK", Fldate: "2020-11-05", SeatsTot: "362" },
                    { CarrId: "LH", CarrName: "Lufthansa", ConnId: "0400", CityFrom: "FRANKFURT", CityTo: "NEW YORK", Fldate: "2020-12-07", SeatsTot: "360" }
                ]
            }
            let oModel = new JSONModel();
            oModel.setData(oSapData);
            this.getView().setModel(oModel);

        },
        onSelect: function(oEvent) {
            let oItem = oEvent.getParameter("selectedItem");
            let oContext = oItem.getBindingContext();
            let aCarrId = this.getView().getModel().getProperty("CarrId", oContext); // oContext 객체 정보에서 CarrId 속성값 빼와라.
            alert("선택된 값의 CarrId는 " + aCarrId +"입니다.")
            // let oFilter = new Filter('CarrId', 'EQ', aCarrId);
            // let oFlightTable = this.getView().byId("flightList");
            // oFlightTable.getBinding("items").filter([oFilter]); 
        },
        onSearch: function() {
            let oComboKey = this.getView().byId("comBoId").getSelectedKey();
            // let aCarrId = this.getView().getModel().getProperty("CarrId", oCombo); // oCombo 객체 정보에서 CarrId 속성값 빼와라
            // ★ 콤보박스는 레이아웃에 Key값 등록해오면 get SelectedKey()로 바로 가져올 수 있다.
            alert("선택된 Airline은 " + oComboKey +"입니다.")
            let oInpText = this.getView().byId("inpText"); // 버튼 클릭시 Input 태그 객체정보 읽어오기
            let sText = oInpText.getValue(); // 객체 정보에서 해당 text값 빼오기
            alert("입력된 Connection Number는 " + sText +"입니다.")
            let airlineFilter = new Filter('CarrId', 'EQ', oComboKey);
            let connectionFilter = new Filter('ConnId', 'EQ', sText);
            let oAirlinesTable = this.getView().byId("airlinesList");
            oAirlinesTable.getBinding("items").filter([airlineFilter, connectionFilter]); 
            
        }
    });
});
