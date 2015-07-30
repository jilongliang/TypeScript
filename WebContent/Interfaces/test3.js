//--typescript的function类型结合javascript的search函数使用
var mySearch; //声明一个interface变量接收
mySearch = function (source, subString) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
$(function () {
    var source = "this is ok";
    var subString1 = "ok";
    var subString2 = "not";
    var result;
    var result1 = mySearch(source, subString1); //从source字符串上面找ok，返回值是true
    var result2 = mySearch(source, subString2); //从source字符串上面找not，返回值是false
    alert(result1); //
    alert(result2);
});
