/** 07/10 SAPUI5 - 6일, 실습 3
 * Search 버튼 추가
 * 1) Department List에서 특정 Item을 클릭
 * 2) Search 버튼을 클릭하면 해당 부서의 직원만 표시
 */

/** 07/10 SAPUI5 - 6일, 실습 3
 * Department를 ComboBox로 변경
 * 1) ComboBox에서 해당 직원 선택
 * 2) Search Button을 클릭하면 해당 부서의 직원만 표시
 */

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter"
],
function (Controller, JSONModel, Filter) {
    "use strict";

    return Controller.extend("sync5.zux0221test.controller.View1", {
        onInit: function () {
            let oData = {
                depInfo: [
                    { depNo: "D001", depName: "ERP SI Team" },
                    { depNo: "D002", depName: "ERP 회계 Team" },
                    { depNo: "D003", depName: "ERP 운영 Team" },
                    { depNo: "D004", depName: "SYNC Company 관리" }
                ],
                empInfo: [
                    { depNo: "D001", personNo: "24010001", empName: "Kang", position: "SI" },
                    { depNo: "D002", personNo: "24010002", empName: "Park", position: "SI" },
                    { depNo: "D002", personNo: "24010003", empName: "Lee", position: "SI" },
                    { depNo: "D003", personNo: "24010004", empName: "Shin", position: "SM" },
                    { depNo: "D004", personNo: "24010005", empName: "Kang", position: "SM" },
                    { depNo: "D004", personNo: "24010006", empName: "Han", position: "SM" }
                ]
            }

            let oModel = new JSONModel(); // 빈 객체 생성
            oModel.setData(oData) // oData 저장
            this.getView().setModel(oModel); // Model에 저장
        },

        onItemClick: function(oEvent) {
            // let sPath = oEvent.getSource().getBindingContext().getPath();
            // alert(sPath)
            // let oTable = this.getView().byId("empInfoTable");
            // oTable.bindElement(sPath);

            // 선택된 객체를 찾아서 Filter 처리 해주기
            // let oFilter = new Filter('depNo', 'EQ', 'D001') // 1. 필터를 걸 대상 2. EQ는 "Equal"의 약자로, 필드의 값이 특정 값과 같은지를 비교하는 연산자 3. 선택된 값
            
            // 동적으로 선택 객체 찾아서 Filter 처리 해주기
            let oContext = oEvent.getSource().getBindingContext();
            let sDepno = this.getView().getModel().getProperty("depNo", oContext);
            let oFilter = new Filter('depNo', 'EQ', sDepno);

            let oEmpTable = this.getView().byId("empInfoTable");

            oEmpTable.getBinding("items").filter([oFilter]); // 필터 조건을 여러개 바인딩 할 수 있다.
        },

        onSearch: function() {
            let oTableDep = this.byId("depInfoTap")
            let oContext = oTableDep.getSelectedItem().getBindingContext(); // getSelectedItem 함수가 핵심.
            let sDepno = this.getView().getModel().getProperty("depNo", oContext);
            let oFilter = new Filter('depNo', 'EQ', sDepno);
            let oEmpTable = this.getView().byId("empInfoTable");
            oEmpTable.getBinding("items").filter([oFilter]); 
        }
    });
});
