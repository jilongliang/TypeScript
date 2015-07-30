/// <reference path="../plugins/typescript/typings/jquery.d.ts" />
define(["require", "exports", 'test4/TelValidator4'], function (require, exports, telValidator) {
    //-------------------显示信息1---------------------
    function showMsgs1() {
        //--方法一---
        var telObj = new telValidator(); //
        var tel = "13697811809";
        var flag = telObj.isAcceptable(tel); //调用TelValidator类的isAcceptable方法
        console.log(flag ? tel + " 匹配 " : tel + "\t 不匹配 ");
        $("#msg1").html(flag ? "<span style='color:red;'>" + tel + " 匹配</span> " : "<span>" + tel + "\t 不匹配</span>");
    }
    $(function () {
        showMsgs1();
    });
});
