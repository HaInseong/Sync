sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("sync5.zux0203.controller.View1", {
        onInit: function () {

        },

        // onSearch: function() {
        //     let value = this.getView().byId("checkBoxValue").getSelected(); //체크박스 데이터는 getSelected()로 가져온다.
        //     if(value === true) {
        //         this.getView().byId("checkBoxValue").setText("하인성");
        //     } else {
        //         this.getView().byId("checkBoxValue").setText("김흥비");
        //     }
        // }

        // 강사님 코드
        onSearch: function() {
            let oChkBox = this.getView().byId("checkBoxValue");
            if( oChkBox.getSelected()) {
                oChkBox.setText("체크박스에 체크 됨");
            } else {
                oChkBox.setText("체크박스에 체크되지 않음");
            }
        }

    });
});
