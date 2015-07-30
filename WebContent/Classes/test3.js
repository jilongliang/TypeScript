/// <reference path="../plugins/typescript/typings/jquery.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//------class与supper使用.----------------
//--动物类 
var Animal = (function () {
    //默认构造方法
    function Animal(theName) {
        this.name = theName;
    }
    //声明一个移动方法，并且传一个距离meters参数.
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        alert(this.name + " 跑了 " + meters + "米.");
    };
    return Animal;
})();
//--蛇
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    //蛇是移动了5米
    Snake.prototype.move = function (meters) {
        if (meters === void 0) { meters = 5; }
        alert("蛇进行跑.....");
        _super.prototype.move.call(this, meters); //调用Animal声明的move方法
    };
    return Snake;
})(Animal);
//马
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        _super.call(this, name);
    }
    Horse.prototype.move = function (meters) {
        if (meters === void 0) { meters = 45; }
        alert("马进行跑...");
        _super.prototype.move.call(this, meters);
    };
    return Horse;
})(Animal);
var sam = new Snake("蛇加油");
var tom = new Horse("马加油"); //Animal
sam.move(); //
tom.move(38); //如果知道马跑多少米，给一个距离米,故马是跑了38米
