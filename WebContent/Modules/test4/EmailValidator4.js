/**export = 对象 的使用*/
define(["require", "exports"], function (require, exports) {
    //　匹配email正则表达式
    var emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    var EmailValidator4 = (function () {
        function EmailValidator4() {
        }
        EmailValidator4.prototype.isAcceptable = function (s) {
            return emailReg.test(s);
        };
        return EmailValidator4;
    })();
    return EmailValidator4;
});
