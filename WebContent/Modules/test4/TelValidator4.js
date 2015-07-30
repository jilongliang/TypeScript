/**export = 对象 的使用*/
define(["require", "exports"], function (require, exports) {
    //匹配移动电话号码
    var telReg = /^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
    var TelValidator4 = (function () {
        function TelValidator4() {
        }
        TelValidator4.prototype.isAcceptable = function (s) {
            return telReg.test(s);
        };
        return TelValidator4;
    })();
    return TelValidator4;
});
