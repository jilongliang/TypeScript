/**
*高级技巧
*构造函数
*当您声明一个类，你实际上是在同一时间创建多个声明。第一个是类的实例的类型
*/
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = "Hello, there";
    return Greeter;
})();
var greeter1;
greeter1 = new Greeter();
alert(greeter1.greet());
var greeterMaker = Greeter;
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker();
alert(greeter2.greet());
