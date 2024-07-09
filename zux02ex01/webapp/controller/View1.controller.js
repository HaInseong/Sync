sap.ui.define([
    "sap/ui/core/mvc/Controller", // sap에 정의된 controller 모듈 가져오기
    "sap/m/MessageBox"
],
function (Controller, MessageBox) { // controller 모듈 사용하기
    "use strict"; // JavaScript 문법 체크 활성화

    return Controller.extend("sync5.zux02ex01.controller.View1", { // extend 메서드를 활용하여 새로운 컨트롤러 클래스 정의
        onInit: function () {

        },

        onPrint1: function() {
            MessageBox.show("HA Inseong", {title: "Massage Box로 fullNmae 표시"})
        },

        onPrint2: function() {
            let firstName = this.getView().byId("firstName").getValue();
            let lastName = this.getView().byId("lastName").getValue();
            //alert(firstName)
            if(lastName === 'HA') {
                MessageBox.show(firstName, {title: "성이 HA이면 Massage Box로 lastName만 표시"})
                this.getView().byId("fullName").setText(lastName);
            } else {
                MessageBox.show(lastName+" "+firstName, {title: "Massage Box로 fullNmae 표시"})
                this.getView().byId("fullName").setText(firstName + " " + lastName);
            }
        }
    });
});
