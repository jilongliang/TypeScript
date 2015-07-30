/****使用reference和path引入jquery.d.ts文件使用jquery.d.ts声明的的$，不引就报错.**/
/// <reference path="../plugins/typescript/typings/jquery.d.ts" />
//var colorList:Array<string>=["red","blue","green","yellow"];//string类型
var colorList = ["red", "blue", "green", "yellow"]; //any不知道类型
//---测试数组打印出来控制台/
function testArray() {
    $.each(colorList, function (key, val) {
        console.log(key + "=" + val);
    });
    $(colorList).each(function (key, val) {
        console.log(key + "=" + val);
    });
}
/***返回一个值***/
function setTableRowColor() {
    $("tr").each(function () {
        //找到tr下面的所有td的第二个列都加上背景blue,字体颜色加上red
        $(this).find("td:eq(1)").css({ color: "red", background: "blue" });
    });
}
function setTableRowColor1() {
    $("tr").each(function () {
        for (var i = 0; i < colorList.length; i++) {
            //找到tr下面的所有td的第二个列都加上背景blue，颜色就加上green色
            if (i == 1) {
                $(this).find("td:eq(1)").css({ color: colorList[i], background: colorList[i + 1] });
            }
        }
    });
}
$(document).ready(function () {
    testArray();
    setTableRowColor();
    //setTableRowColor1();
});
