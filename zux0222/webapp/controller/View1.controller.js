sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";
// ☆ sap.ui.table 공부함. 이 부분은 중요도 떨어짐.
    return Controller.extend("sync5.zux0222.controller.View1", {
        onInit: function () {
            let oSapData = { // JSON과 Odata 자주 쓰는 기본 형식
                erpDepSet: [
                    { Depno: "D001", Dtext: "ERP SI Team"},
                    { Depno: "D002", Dtext: "ERP 회계 Team"},
                    { Depno: "D003", Dtext: "ERP 운영 Team"},
                    { Depno: "D004", Dtext: "SYNC Company 관리"},
                ]
            };
            // let oData = {
            //     empName: { lastName: "Kang", firstName: "SK" } // empName으로 감싸느냐의 차이가 크다.
            // };
            let oModel = new JSONModel(); // 빈 객체 생성
            oModel.setData(oSapData) // oData 저장
            this.getView().setModel(oModel); // Model에 저장

            // ★ Default 모델은 하나만 저장하므로 세컨드로 저장해야한다.
            // ★ Second Model을 다양한 객체 또는 구분되어야 하는 객체 데이터를 뷰에 저장하고 활용하고 싶을 때 사용한다.
            // ★ 그리고 복잡한 데이터 구조를 별도의 모델로 분리하여 관리함으로써 코드의 가독성과 유지보수를 쉽게 한다.
            let oData = {
                lastName: "Kang", firstName: "SK" 
            };

            let oModel2 = new JSONModel(); 
            oModel2.setData(oData) 
            this.getView().setModel(oModel2, "emp"); 
        },
        
        onRowSelect: function(oEvent) {
            let oContext = oEvent.getParameter("rowContext") //List에서는 "listItem", 테이블에서는 "selectedItem"
            // ★ getParameter("rowContext") === oEvent.getParameter("selectedItem").getBindingContext; 객체 정보 한방에 가져올 수 있다.
            alert(typeof(oContext))
            let sDepno = this.getView().getModel().getProperty("Depno", oContext);
            alert(sDepno)
        }
    });
});
