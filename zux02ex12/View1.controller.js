sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sync5.zux02ex12.controller.View1", {
        onInit: function () {
            let oData = {
                student: [
                    { Key: "ST0501", Text: "박하영", Leader: "일반", Gender: "여성" },
                    { Key: "ST0502", Text: "진승원", Leader: "조장", Gender: "남성" },
                    { Key: "ST0503", Text: "조영진", Leader: "일반", Gender: "남성" },
                    { Key: "ST0504", Text: "방현지", Leader: "일반", Gender: "여성" },
                    { Key: "ST0505", Text: "마하영", Leader: "일반", Gender: "여성" }
                ]
            };
            let oModel = new JSONModel();
            oModel.setData(oData);
            this.getView().setModel(oModel);
        },

        onSelect: function(oEvent) {
            let oItem = oEvent.getParameter("selectedItem"); // 선택된 객체 가져오기
            let oContext = oItem.getBindingContext();  // 선택된 객체의 정보 가져오기
            let sPath = oContext.getPath(); // 선택된 객체의 주소값 가져오기 = 배열의 몇번째 인지 알려준다. // sPath는 스트링
            let oPanel = this.getView().byId("panelStudentInfo");
            oPanel.bindElement(sPath);
        },
        // 버튼으로 값 가져오기.
        onSearch: function() {
            let oList = this.getView().byId("comboBox");
            let oItem = oList.getSelectedItem(); // 핵심
            let oContext = oItem.getBindingContext();
            let sPath = oContext.getPath();
            let oPanel = this.getView().byId("panelStudentInfo");
            oPanel.bindElement(sPath);

            // 버튼 강사님 정답 코드
            // let oSource = oEvent.getSource();
            // alert(oSource)
            // let oContext = oSource.getBindingContext();
            // alert(oContext)
            // let sPath = oContext.getPath();
            // alert(sPath)
        }
    });
});
