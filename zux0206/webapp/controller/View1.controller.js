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
            // 파일은 생성되어 있어야하는지? Yes
            let oView = this.getView(); // 현재 컨트롤러가 속해 있는 뷰 객체를 가져옵니다.
            
            if(!this.getView().byId("idPopup")) { // 팝업이 존재하는지부터 id를 통해서 찾아야한다.(★ Fragment까지 뒤진다) = 결과가 true이면 if문이 false가 되므로 만들 필요가 없어요 = 실행되지 않아요.
                Fragment.load({ // if문이 실행된다면 Fragment를 만들어주세요.
                    // 어떤 내용으로 생성할 것인지 객체로 정의해주세요.
                    name: "sync5.zux0206.view.Popup", // 팝업에 대한
                    id: oView.getId(), // 자동으로 view의 fragment Id 생성
                    // 현재 뷰의 ID를 사용하여 새로운 팝업 창의 ID를 설정합니다.
                    type: "XML",
                    controller: this // 팝업창에 컨트롤러를 현재의 컨트롤러로 등록한다.
                }).then( // 자스는 비동기이므로 로드가 완성이 되면 다음을 실행한다.
                    function(oPopup) { // 로드가 성공했다면 성공된 정보를 객체형태의 매개변수로 받아야한다.
                        oView.addDependent(oPopup); // 팝업 창을 현재 뷰에 연결시킵니다.
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

