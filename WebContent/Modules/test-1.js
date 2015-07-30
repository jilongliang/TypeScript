/// <reference path="../plugins/typescript/typings/jquery.d.ts" />
/// <reference path="test1/Validation.ts" />
/// <reference path="test1/LettersOnlyValidator.ts" />
/// <reference path="test1/ZipCodeValidator.ts" />
/***
 * Splitting Across Files分割跨文件
 */
// 声明一个数组.
var strings = ['Hello', '98052', '101'];
// 使用这个验证.
var validators = {};
validators['Zip Code'] = new Validation.ZipCodeValidator(); //这个是验证邮政编码
validators['Letters only'] = new Validation.LettersOnlyValidator(); //这个是验证英文
function showMsg() {
    //显示每个字符串是否通过每个验证
    strings.forEach(function (s) {
        for (var name in validators) {
            console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
            $("#msg1").html('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
        } //--for--end
    }); //--forEach--end
}
$(document).ready(function () {
    showMsg();
});
