sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
function (Controller, Fragment) {
    "use strict";

    return Controller.extend("sync5.zux0206.controller.View1", {
        onInit: function () {

        },
        onPopup: function() {
            let oView = this.getView(); // View 정보를 oView에 저장. 상황에 따라 this의 위치가 바뀔 수 있으니까.
            if(!this.getView().byId("idPopup")) { // 팝업이 존재하는지부터 id를 통해서 찾아야한다. = true이면 만들 필요가 없어용.
                Fragment.load({ // fragment가 만들어진게 없다면 만들어주세요.
                    // 뭐를 로드할건지 많으니 객체로 지정해주세용.
                    id: oView.getId(), // 팝업 파일에 있는 아이디들을 다 가져온다.
                    name: "sync5.zux0206.view.Popup", // 팝업에 대한
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

