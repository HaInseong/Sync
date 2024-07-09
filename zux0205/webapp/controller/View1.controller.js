sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("sync5.zux0205.controller.View1", {
        onInit: function () {

        },

        onMain: function() {
            alert(this.getView().byId("idMain").getValue())

            let valFragMain = this.getView().byId(sap.ui.core.Fragment.createId( //createdId 메서드로 Fragment파일에 있는 아이디에 접근해서 값을 가져온다.
                "idInfoView", "idMain"
            )).getValue();
            alert(valFragMain)

            // alert("Main")
            // MessageBox.show(
            //     this.getView().byId("idMain").getValue() + " " +
            //     this.getView().byId("idFrag").getValue(),
            //     {
            //         title: "Main Mesg"
            //     }
            // )
        },
        onFrag: function() { // Button의 press는 Fragment를 찾지 않아도 자동으로 인식한다.
            alert(this.getView().byId("idMain").getValue())
            let valFragMain = this.getView().byId(sap.ui.core.Fragment.createId( //createdId 메서드로 Fragment파일에 있는 아이디에 접근해서 값을 가져온다.
            "idInfoView", "idMain"
        )).getValue();
        alert(valFragMain)
        
            // alert("Frag")
            // let idMain = this.getView().byId("idMain").getValue();
            // let idFrag = this.getView().byId("idFrag").getValue();
            // MessageBox.show(
            //     idFrag + " " + idMain,
            //     {
            //         title: "Main Mesg"
            //     }
            // )
        }
    });
});
