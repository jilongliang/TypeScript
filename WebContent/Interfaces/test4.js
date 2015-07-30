/// <reference path="../plugins/typescript/typings/jquery.d.ts" />
//Array Types
var myArray;
myArray = ["Bob", "Fred"];
$(function () {
    $.each(myArray, function (key, val) {
        alert(val);
    });
});
