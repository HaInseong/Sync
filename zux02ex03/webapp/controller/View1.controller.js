sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel"
],
function (Controller, Fragment, JSONModel) {
    "use strict";

    return Controller.extend("sync5.zux02ex03.controller.View1", {
        onInit: function () {

        },
        onPopup: function() {

            let oModel = new JSONModel(); // oModel 변수에 JSON 객체 공간 생성
            let oData = { // 객체 변수 이름은 무조건 o로 시작
                tech01: "SAPUI5", // 객체가 아닌 속성 = 변수 2개 선언해서 oData에 담은것으로 이해해야 한다.
                tech02: "ABAP",
                tech03: "CDS",
                tech04: "MM/PP/SD",
                tech05: "FI/CO"
            };
            oModel.setData(oData); // 빈 객체에 생성해둔 객체로 채워넣음.
            this.getView().setModel(oModel); // function 끝나도 값이 사라지지 않게 Model을 View에 저장

            let oView = this.getView(); // View 정보를 oView에 저장. 상황에 따라 this의 위치가 바뀔 수 있으니까.
            if(!this.getView().byId("idPopup")) { // 팝업이 존재하는지부터 id를 통해서 찾아야한다. = true이면 만들 필요가 없어용.
                Fragment.load({ // fragment가 만들어진게 없다면 만들어주세요.
                    // 뭐를 로드할건지 많으니 객체로 지정해주세용.
                    id: oView.getId(), // 팝업 파일에 있는 아이디들을 다 가져온다.
                    name: "sync5.zux02ex03.view.Popup", // 팝업에 대한
                    type: "XML",
                    controller: this
                }).then( // 자스는 비동기이므로 로드가 완성이 되면 다음을 실행한다.
                    function(oPopup) { // 로드가 성공했다면 성공된 정보를 객체형태로 매개변수로 받아야한다.
                        oView.addDependent(oPopup); // 로드된 팝업을 뷰에 추가해준다. // 생략 가능
                        oPopup.open();
                        
                    }
                ); 
               
            } else {
                this.getView().byId("idPopup").open(); // 만들어진게 있다면 오픈해주세요.
            }
        },
        onClose: function() {
            this.byId("idPopup").close();
        }
    });
});
