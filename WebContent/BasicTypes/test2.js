/****使用reference和path引入jquery.d.ts文件使用jquery$就不会报错.**/
/// <reference path="../plugins/typescript/typings/jquery.d.ts" />
/**
 * ts的void，string结合jquery的使用.
 *
 */
/***返回void值***/
function setTableRowHtml1() {
    var userName = "";
    $("tr").each(function () {
        userName = $(this).find("td:eq(1)").html();
    });
    alert(userName);
}
/***返回string一个值***/
function setTableRowHtml2() {
    var userName = "";
    $("tr").each(function () {
        userName = $(this).find("td:eq(1)").html();
    });
    return userName;
}
//---jquery执行.
$(function () {
    //setTableRowHtml1();
    var userName = setTableRowHtml2();
    alert(userName);
});
