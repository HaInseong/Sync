sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sync5.zux0215.controller.View1", {
        onInit: function () {
            let oData = {
                stdSet: [
                    // 키값을 고려해서 작성해야 한다.
                    { StudentNo: "ST0501", Name: "박하영", Leader: "일반", Gender: "여성" },
                    { StudentNo: "ST0502", Name: "진승원", Leader: "조장", Gender: "남성" },
                    { StudentNo: "ST0503", Name: "조영진", Leader: "부조장", Gender: "남성" },
                    { StudentNo: "ST0504", Name: "방현지", Leader: "일반", Gender: "여성" },
                    { StudentNo: "ST0505", Name: "마하영", Leader: "일반", Gender: "여성" }
                ]
            };
            let oModel = new JSONModel();
            oModel.setData(oData);
            this.getView().setModel(oModel);
        },
        // 버튼으로 값 찾아오는 방법
        onItemClick: function(oEvent) {
            let oSource = oEvent.getSource();
            let oContext = oSource.getBindingContext();
            // Model.getProperty(속성, getBindingContext()) = 테이블에서 원하는 속성값 빼오기
            let sPath = oContext.getPath();
            alert(sPath)
        }
    });
});
