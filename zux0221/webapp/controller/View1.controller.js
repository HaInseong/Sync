/** 07/10 SAPUI5 - 6일, 실습 1
 * 1. 프로젝트 실행
 * 2. Table 2개에 대한 Model / Data 설정
 *  1) 2개의 별도 Array로 구현
 * 3. View에서 2개의  Table 구현
 *  1) 첫번째 Table: 부서 List
 *  2) 두번째 Table: 직원 List
 * 다 완료 후에 각각의 용어에 대해 생각해보세요.
 * 테이블, 필드, 릴레이션, pk, fk에 대해서도 정의를 완벽하게 숙지하세요.
 * 
 * 실습 2
 * Deparment 테이블 List에서 Item을 클릭하면 해당되는 부서의 직원만 보이게 표시 = Filter 적용해서 해결
 */

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter"
],
function (Controller, JSONModel, Filter) {
    "use strict";

    return Controller.extend("sync5.zux0221.controller.View1", {
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

            // 동적 테이블 만들어보는 중
            // let oData = [{
            //     depInfo: { depNo: "D001", depName: "ERP SI Team" },
            //     empInfo: [
            //         { personNo: "24010001", empName: "Kang", position: "SI" },
            //         { personNo: "24010002", empName: "Park", position: "SI" }
            //     ]
            // },
            // {
            //     depInfo: { depNo: "D002", depName: "ERP 회계 Team" },
            //     empInfo: [
            //         { personNo: "24010003", empName: "Lee", position: "SI" },
            //         { personNo: "24010004", empName: "Shin", position: "SM" }
            //     ]
            // },
            // {
            //     depInfo: { depNo: "D003", depName: "ERP 운영 Team" },
            //     empInfo: [
            //         { personNo: "24010005", empName: "Kang", position: "SM" },
            //         { personNo: "24010006", empName: "Han", position: "SM" }
            //     ]
            // },
            // {
            //     depInfo: { depNo: "D004", depName: "SYNC Company 관리" },
            //     empInfo: [
            //         { personNo: "24010001", empName: "Kang", position: "SI" },
            //         { personNo: "24010002", empName: "Park", position: "SI" },
            //         { personNo: "24010003", empName: "Lee", position: "SI" }
            //     ]
            // }]

            

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
        }

    });
});
