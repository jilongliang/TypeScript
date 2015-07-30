/// <reference path="../plugins/typescript/typings/jquery.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * public/private
 * 默认是public
 * 您可能已经注意到，在我们还没有使用这个词“公众”作出任何类可见的成员的上述例子。
 * 如C＃语言要求每个成员被明确标记为'公共'可见。在打字稿，每个成员都是公共默认。
 * 您可能仍然标记成员的私人，所以你控制什么是公开可见的外部类的
 */
var MyAnimal = (function () {
    //构造方法
    function MyAnimal(theName) {
        this.theName = theName;
        this.name = theName;
    }
    MyAnimal.prototype.getMsg = function (name) {
        return this.name = name;
    };
    return MyAnimal;
})();
//犀牛
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        _super.call(this, "犀牛");
    }
    Rhino.prototype.getMsg = function (name) {
        return name;
    };
    return Rhino;
})(MyAnimal);
//员工
var Employees = (function () {
    //构造方法
    function Employees(theName) {
        this.name = theName;
    }
    return Employees;
})();
var animal = new MyAnimal("山羊"); //Goat山羊
var retMsg1 = animal.getMsg("鹿");
var rhino = new Rhino();
var employees = new Employees("洪七公");
animal = rhino;
//animal = employees;//此时这个值不能赋给animal，并不能编译通过.
$(function () {
    $("#msg1").html("<span style='color:red'>" + retMsg1 + "</span>");
});
