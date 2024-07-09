sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel"
],
function (Controller, MessageBox, JSONModel) { // 매개변수는 define 배열의 순서를 따라가므로 이름이 꼭 같아야한건 아니다.
    "use strict";

    return Controller.extend("sync5.zux0211.controller.View1", {
        onInit: function () { // view가(화면단이) 만들어지기 전에 가장 먼저 실행된다.
            // let oModel = new sap.ui.model.json.JSONModel(); // oModel 변수에 JSON 객체 공간 생성
            let oModel = new JSONModel(); // oModel 변수에 JSON 객체 공간 생성
            let oData = { // 객체 변수 이름은 무조건 o로 시작
                tech01: "SAPUI5", // 객체가 아닌 속성 = 변수 2개 선언해서 oData에 담은것으로 이해해야 한다.
                tech02: "ABAP",
                readOnly: false
            };
            
            // ★ 객체 안에 객체의 속성에 접근할 때 view에서 oData와의 차이를 살펴보기.
            // = oSkill로 한번 더 접근해줘야 한다.
            let oData2 = {
                oSkill: {
                    tech01: "CDS", 
                    tech02: "GM", 
                    readOnly: false
                }
            };
            // oModel.setData(oData); // 빈 객체에 생성해둔 객체로 채워넣음.
            oModel.setData(oData2); // 책의 코드보다는 이 코드가 동적으로 매개변수 갈아끼우는게 훨씬 편해서 좋다.
            this.getView().setModel(oModel); // function 끝나도 값이 사라지지 않게 Model을 View에 저장 
        },
        onClick: function () {
            // view에서 데이터 가져오기
            let sTitle = "SAP Skill";
            let oInpTech01 = this.getView().byId("inpTech01");
            let oInpTech02 = this.getView().byId("inpTech02");
            let sTech01 = oInpTech01.getValue();
            let sTech02 = oInpTech02.getValue();

            let sMesg = "My Skills have " + sTech01 + ", " +
                        this.byId("inpTech02").getValue();
        
            let sMesg2 = "My Skills have " + sTech01 + ", " +
                        sTech02;

            MessageBox.show(sMesg2, { // 첫번째 인자는 content, 두번째 인자는 객체
                title: sTitle
            }) 

        },
        onClick2: function () {
            // Model에서 가져와서 출력하기
            // 강사님 코드
            let oView = this.getView();
            let oModel = oView.getModel(); // 모델 객체 가져오기.
            let oData = oModel.getData();
            alert(oData)
            alert(oData.tech01) // oData2가 할당되어 있어서 객체 접근 방법 잘못됨.
            alert(oData.oSkill.tech01)

            // 아래는 내가 짠 코드
            // let oModel = this.getView().getModel();
            // let tech01 = oModel.getProperty("/tech01");
            // let tech02 = oModel.getProperty("/tech02");
            // let sTitle = "SAP Skill";
            // let sMesg = "My Skills have " + tech01 + ", " +
            //             tech02;
            // MessageBox.show(sMesg, { // 첫번째 인자는 content, 두번째 인자는 객체
            //     title: sTitle
            // }) 
        }
    });
});
