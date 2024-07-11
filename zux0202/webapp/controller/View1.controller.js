sap.ui.define([
    "sap/ui/core/mvc/Controller", // 사용할 라이브러리 경로 등록
    "sap/m/MessageBox"
],
function (Controller, MessageBox) { // 라이브러리를 이름대로 찾아가는게 아니라 등록된 순서대로 찾아감, 그래도 이름 맞춰서 작성하는 습관
    "use strict";

    return Controller.extend("sync5.zux0202.controller.View1", {
        onInit: function () { // onInit은 서버 첫 실행시 한번만 실행되는 메서드
            MessageBox.show("Content", {title: "Mesg Title"}); // JS는 속성에서는 대소문자를 구분한다.(Title로 적으면 새속성 생성됨)
            
            // 값 가져오기 방법1
            this.getView().byId("inpStdName").setValue("하")

            // 값 가져오기 방법2
            let oView = this.getView();
            let oInpStdName = oView.byId("inpStdName");
            alert(oInpStdName)
            oInpStdName.setValue("HA")
        },
        onSearch: function() { // <button press="onSearch"> 클릭시 등록된 onSearch 함수 실행
            // alert("클릭완료")
            
            // 값 가져오기 방법1
            let valStdName = this.getView().byId("inpStdName").getValue(); //이때 this는 현재 실행 중인 컨트롤러 인스턴스를 가리킨다.
            alert(valStdName);

            // 값 가져오기 방법2
            let oView = this.getView();
            let oInput = oView.byId("inpStdName");
            let valStdName2 = oInput.getValue();
            console.log(valStdName2)
        }
    });
});
