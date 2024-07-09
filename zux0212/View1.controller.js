sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sync5.zux0212.controller.View1", {
        onInit: function () {   
            let oData = {
                skillId: "S01"
            };
            oData.aSkill = [
                { skillId: "S01", skillName: "SAPUI5" },
                { skillId: "S02", skillName: "ABAP" },
            ];

            let oData2 = {
                data: [ { department: "HR",
                        employees: [
                            {name: "Mayer"},
                            {name: "Treusch"},
                            {name: "Schmitt"},
                            {name: "Stark"}
                        ]},
                        { department: "Support",
                        employees: [
                            {name: "Muller"},
                            {name: "Agassi"},
                            {name: "Duck"},
                            {name: "Pan"}
                        ]
                    }]
            }
            let oModel = new JSONModel();
            oModel.setData(oData2); // 객체 동적할당
            this.getView().setModel(oModel); // View의 Model 속성에 객체 저장.
        },
        onSelect: function(oEvent) {
            let oItem = oEvent.getParameter("selectedItem"); // 선택된 항목값을 저장한다.
            let sPath = oItem.getBindingContext().getPath(); // 선택된 항목값의 경로 가져와서 저장하기.
            let oList = this.getView().byId("idList"); // List 태그에 바인딩한다.
            oList.bindElement(sPath); // List태그에 저장해둔 경로로 지정해준다.

            // let oCombo = this.getView().byId("cbSkill");
            // let oList = this.getView().byId("idList");

            //let selectedSkill = oCombo.getSelectedKey();
            //let selectSKillId = this.getView().getModel().getData().skillId;
            //alert(selectedSkill) // selectedKey 읽어오는 방법1 = id로 가져오기
            //alert(selectSKillId) // selectedKey 읽어오는 방법1 = 데이터 바인딩 찾아서 속성값으로 가져오기
        
        }
    });
});
