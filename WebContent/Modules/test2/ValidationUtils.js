/**
 *声明一个ValidationUtils工具块module
 *推荐使用.
 */
var ValidationUtils;
(function (ValidationUtils) {
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
    ValidationUtils.EmailValidator = EmailValidator;
    //匹配移动电话号码
    var telReg = /^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
    var TelValidator = (function () {
        function TelValidator() {
        }
        TelValidator.prototype.isAcceptable = function (s) {
            return telReg.test(s);
        };
        return TelValidator;
    })();
    ValidationUtils.TelValidator = TelValidator;
})(ValidationUtils || (ValidationUtils = {}));
