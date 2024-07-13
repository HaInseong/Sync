sap.ui.jsview( 
    "sync5.zux0203.view.JsView", 
    {
        getControllerName: function() {
            return "sync5.zux0203.controller.JsView"; // JsView가 생성될 때 oController가 자동으로 주입된다.
        },

        // 외부에서는 사용하지 않고 내부에서만 사용한다는 의미가 깔림 = 언더라인
        _onClick: function() {
            alert("this function");
        },

        createContent: function(oController) {
            let oButton = new sap.m.Button({ // sap가 제공하는 모바일용의 버튼을 만들기
                text: "JS Button"
                // press: this._onClick 
                // press: function() {
                //     alert("Js Button") // view에서도 기능을 처리한다. 
                //     // = 이처럼 JsView를 사용하면 컨트롤러와 뷰로 나누는 이유가 없음.
                // }
            });
            oButton.attachPress(oController.onClick);
            return [ oButton ]; // 리턴은 왜 배열로 해주는거지? = 화면에 버튼을 출력해주는 역할.
        }
    }
);
