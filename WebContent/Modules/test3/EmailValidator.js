/**import、require、export关键的使用..***********/
define(["require", "exports"], function (require, exports) {
    //　匹配email正则表达式
    var emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    var EmailValidator = (function () {
        function EmailValidator() {
        }
        EmailValidator.prototype.isAcceptable = function (s) {
            return emailReg.test(s);
        };
        return EmailValidator;
    })();
    exports.EmailValidator = EmailValidator;
});
