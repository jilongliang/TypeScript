/// <reference path="../plugins/typescript/typings/jquery.d.ts" />
//--实现IClock接口
var Clock = (function () {
    function Clock(h, m) {
    } //--构造函数方法
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
})();
var Clock1 = (function () {
    function Clock1(h, m) {
    }
    return Clock1;
})();
var cs = Clock1;
var newClock = new cs(7, 30);
console.log(newClock);
