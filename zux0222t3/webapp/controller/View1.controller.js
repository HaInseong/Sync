sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/ui/model/Filter",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
],
function (Controller, JSONModel, Fragment, Filter, MessageBox, MessageToast) {
    "use strict";

    return Controller.extend("sync5.zux0222t3.controller.View1", {
        onInit: function () {
            let oData = {
                "airlineSet": [ 
		            { "Carrid": "AA", "CarrName": "American Airlines" },
		            { "Carrid": "LH", "CarrName": "Lufthansa" }
	            ],
	            "flightSet": [
                    { "Carrid": "AA", "CarrName": "American Airlines", "ConnId":"0017", "CityFrom":"NEW YORK", "CityTo":"SAN FRANCISCO", "Fldate":"2020-10-01", 
                    "SeatsTot":416, "SeatsOcc": 366, "SeatsOccB":30, "SeatsOccF":20 },
                    { "Carrid": "AA", "CarrName": "American Airlines", "ConnId":"0017", "CityFrom":"NEW YORK", "CityTo":"SAN FRANCISCO", "Fldate":"2020-12-04", 
                    "SeatsTot":424, "SeatsOcc": 373, "SeatsOccB":29, "SeatsOccF":21 },
                    { "Carrid": "AA", "CarrName": "American Airlines", "ConnId":"0064", "CityFrom":"SAN FRANCISCO", "CityTo":"NEW YORK", "Fldate":"2020-10-13", 
                    "SeatsTot":356, "SeatsOcc": 309, "SeatsOccB":28, "SeatsOccF":19 },
                    { "Carrid": "AA", "CarrName": "American Airlines", "ConnId":"0064", "CityFrom":"SAN FRANCISCO", "CityTo":"NEW YORK", "Fldate":"2020-11-04", 
                    "SeatsTot":363, "SeatsOcc": 314, "SeatsOccB":29, "SeatsOccF":20 },
                    { "Carrid": "AA", "CarrName": "American Airlines", "ConnId":"0064", "CityFrom":"SAN FRANCISCO", "CityTo":"NEW YORK", "Fldate":"2020-12-06", 
                    "SeatsTot":367, "SeatsOcc": 319, "SeatsOccB":29, "SeatsOccF":19 },
                    { "Carrid": "LH", "CarrName": "Lufthansa", "ConnId":"0400", "CityFrom":"FRANKFURT", "CityTo":"NEW YORK", "Fldate":"2020-10-04", 
                    "SeatsTot":364, "SeatsOcc": 315, "SeatsOccB":30, "SeatsOccF":19 },
                    { "Carrid": "LH", "CarrName": "Lufthansa", "ConnId":"0400", "CityFrom":"FRANKFURT", "CityTo":"NEW YORK", "Fldate":"2020-11-05", 
                    "SeatsTot":362, "SeatsOcc": 313, "SeatsOccB":29, "SeatsOccF":20 },
                    { "Carrid": "LH", "CarrName": "Lufthansa", "ConnId":"0400", "CityFrom":"FRANKFURT", "CityTo":"NEW YORK", "Fldate":"2020-12-07", 
                    "SeatsTot":360, "SeatsOcc": 313, "SeatsOccB":28, "SeatsOccF":19 }
                ]	
            }
            let oModel = new JSONModel();
            oModel.setData(oData);
            this.getView().setModel(oModel); // Default Model

            // Model 2 생성
            let sModel = new JSONModel(); 
            sModel.setData(oData);
            this.getView().setModel(sModel, "sModel"); // Second Model

            // MessageBox.show("조건을 모두 선택 또는 입력하세요.", {title: "Condition Error"})
            // MessageToast.show("조건을 모두 선택 또는 입력하세요.")

            // MessageBox.information("조건을 모두 선택 또는 입력하세요.", 
            // {title: "Condition Error", 
            // actions: [MessageBox.Action.YES, MessageBox.Action.NO],
            // onClose: function(oAction) {
            //     if(oAction === MessageBox.Action.NO) {
            //         console.log("List No data 출력되게")
            //     } 
            // }})
            
        },

        onSelect: function() {
            // alert(this.getView().byId(Fragment.createId("cdView", "comBoId")).getValue())
        },

        onSearch: function() {
            let oView = this.getView();
            let oPanel = oView.byId(Fragment.createId("fdView", "panelFlightInfo"));
            // expanded 속성 설정
            oPanel.setExpanded(false);

            let fragComBoIdVal = this.getView().byId(Fragment.createId("cdView", "comBoId")).getSelectedKey()
            let fragInputIdVal = this.getView().byId(Fragment.createId("cdView", "inpText")).getValue()

            if(!fragComBoIdVal || fragInputIdVal === '') {
                MessageBox.information("조건을 모두 선택 또는 입력하세요.", {title: "Condition Error", 
                    actions: [MessageBox.Action.YES]
                    // onClose: function(oAction) {
                    //     if(oAction === MessageBox.Action.NO) {
                    //         console.log("List No data 출력되게")
                    //     } 
                    // },
                    // onYes: function() {

                    // }
                })
            }
            // alert(fragComBoIdVal + "/" + fragInputIdVal)

            // Filter 1
            let airlineFilter = new Filter('Carrid', 'EQ', fragComBoIdVal);
            let connectionFilter = new Filter('ConnId', 'EQ', fragInputIdVal);
            let oAirlinesTable = this.getView().byId(Fragment.createId("flView", "airlinesList"));

            oAirlinesTable.getBinding("items").filter([airlineFilter, connectionFilter]); 
        },

        onItemClick: function(oEvent) {
            // Fragment 인스턴스 가져오기
            let oContext = oEvent.getSource().getBindingContext(); // 이벤트로 전달받은 객체 정보를 Detail에 바인딩해줘야 한다.
            let oView = this.getView();
            let oPanel = oView.byId(Fragment.createId("fdView", "panelFlightInfo"));
            // expanded 속성 설정
            oPanel.setExpanded(true);
            oPanel.setBindingContext(oContext);


            let oModel = this.getView().getModel();
            let carrId = oModel.getProperty("Carrid", oContext)
            let connId = oModel.getProperty("ConnId", oContext)
            alert(carrId + connId)
        },

        onAfterRendering: function() {
            let oView = this.getView();
            // let sModel = oView.getModel("sModel");
            // let defaultCarrid = sModel.getProperty("/airlineSet/0/Carrid"); // ★ getProperty에 매개변수로 절대경로 주면 원하는 속성값만 가져올 수 있다.
            // let defaultConnid = sModel.getProperty("/flightSet/0/ConnId"); // 원래는 원하는 속성명과 객체 정보 전달해야 한다.
            
            // 위에 절대 경로보다 아래 코드가 더 좋다. 디폴트값을 절대경로 바꿀 때마다 자동으로 적용되므로.
            let defaultCarrid = this.getView().byId(Fragment.createId("cdView", "comBoId")).getSelectedKey();
            let defaultConnid = this.getView().byId(Fragment.createId("cdView", "inpText")).getValue();
 

            // Filter 2
            let airlineFilter = new Filter("Carrid", "EQ", defaultCarrid);
            let connectionFilter = new Filter("ConnId", "EQ", defaultConnid);

            let oAirlinesTable = oView.byId(Fragment.createId("flView", "airlinesList"));
            oAirlinesTable.getBinding("items").filter([airlineFilter, connectionFilter]);
        },

        onCollapse: function() {
            let oView = this.getView();
            let oPanel = oView.byId(Fragment.createId("fdView", "panelFlightInfo"));
            oPanel.setBindingContext(null);
        }
    });
});
