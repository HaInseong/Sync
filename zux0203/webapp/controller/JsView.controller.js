sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("sync5.zux0203.controller.JsView", { // JsView와 같은 이름으로 컨트롤러 확장(연결)
        onInit: function () {

        },

        onClick: function () {
            alert("this function");
        }
    });
});
