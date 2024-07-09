sap.ui.define( // 첫번째 인자는 배열을 받는다. 두번째 인자는 function을 받는다.
    [ "sap/ui/core/mvc/Controller" ], // sap은 사용할 모듈(객체)을 배열로 define 함.
    function(Controller) { //define해서 사용가능해진 모듈을 메서드 인자로 전달해서 사용함.
        return Controller.extend( // 1인자 단편적인 정보, 2인자 객체 받게 되어있음
            "sync5.zux0201.controller.Main", // 메인 모듈을 확장한다.
            {
                onInit: function() {
                    alert("Hello");
                }
            }
        );
    }
);