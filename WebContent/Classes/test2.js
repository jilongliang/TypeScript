/// <reference path="../plugins/typescript/typings/jquery.d.ts" />
//--class和constructor构造器使用。
var UserInfo = (function () {
    //--默认的构造方法..
    function UserInfo(msg) {
        this.username = msg; //从构造方法传一个用户字符串过去.
    }
    UserInfo.prototype.getUserInfo = function () {
        return "欢迎您, " + this.username;
    };
    return UserInfo;
})();
function printMsg() {
    var resMsg = "";
    var g = new UserInfo("龙梅子"); //创建一个UserInfo对象,并且构造函数必须要传一个字符串.
    resMsg = g.getUserInfo(); //调用对象方法.
    return resMsg;
}
/****************jQuery-执行..**********************/
$(function () {
    var result = printMsg();
    $("#msg").html("<span style='color:green;'>" + result + "<span>");
});
