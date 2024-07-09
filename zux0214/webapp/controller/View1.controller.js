sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sync5.zux0214.controller.View1", {
        onInit: function () {
            let oData = {
                skillList : [ //객체 배열
                    { sId: "S01", sName: "SAPUI5", grade: "중하",
                     empList: [
                        {Pernr: "24010001", Ename: "Kang"},
                        {Pernr: "24010002", Ename: "Han"}
                     ]
                    },
                    { sId: "S02", sName: "ABAP", grade: "중",
                    empList: [
                        {Pernr: "23010001", Ename: "Kang1"},
                        {Pernr: "23010002", Ename: "Han1"}
                     ]
                    },
                    { sId: "S03", sName: "HANA", grade: "상",
                    empList: [
                        {Pernr: "22010001", Ename: "Kang2"},
                        {Pernr: "22010002", Ename: "Han2"}
                     ]
                    }
                 ]
            };
            let oModel = new JSONModel();
            oModel.setData(oData);
            this.getView().setModel(oModel); // Model을 여러개 셋팅할 수도 있다.
            
        },

        onSelect: function(oEvent) { // selectionChange 이벤트가 발생하면 콤보박스 내용과, 선택된 객체 정보를 던져준다.
           alert(this.getView().byId("cbSkill").getSelectedKey()) // 콤보박스에서 선택된 key속성값 가져오기

           // let sPath = oEvent.getParameter("selectionItem").getBindingContext().getPath();
           // alert(typeof(sPath));
           let oItem = oEvent.getParameter("selectedItem"); // 선택된 객체 가져오기
           let oContext = oItem.getBindingContext();  // 선택된 객체의 정보 가져오기
           let sPath = oContext.getPath(); // 선택된 객체의 주소값 가져오기 = 배열의 몇번째 인지 알려준다. // sPath는 스트링
           let oList = this.getView().byId("idList");
           oList.bindElement(sPath);// 핵심은 bindElement하기 위함이다. // bindElement 함수에 필요한 매개변수는 스트링


        },
        // onSearch: function(oEvent) {
            
        //     alert(this.getView().byId("cbSkill").getSelectedKey());
        //     let oItem = getView().getParameter("selectedItem");
        //     console.log(oItem)
        // }
//셀렉션 체인지 없애고 버튼 추가해서 버튼 이벤트로 데이터 바인딩하게 만들어보세요.

    });
});

