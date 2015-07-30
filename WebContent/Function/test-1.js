/*******声明一个add方法********/
function add(x, y) {
    return x + y;
}
/*******声明一个myAdd1方法********/
var myAdd1 = function (x, y) {
    return x + y;
};
/*******声明一个myAdd2方法********/
//现在我们已经输入的功能，让我们写了完整类型的功能出来通过查看每件功能类型。
var myAdd2 = function (x, y) {
    return x + y;
};
var number3 = myAdd2(1, 3);
$(function () {
    var number1 = add(1, 2);
    var number2 = myAdd1(1, 2);
    $("#msg1").html("<span style='color:red;'>" + number1 + "</span>");
    $("#msg2").html("<span style='color:red;'>" + number2 + "</span>");
    $("#msg3").html("<span style='color:red;'>" + number3 + "</span>");
});
