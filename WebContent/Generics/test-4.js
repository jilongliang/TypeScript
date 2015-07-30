/**
 *Generic Classes
 *
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//泛型类也有类似形状的通用接口。泛型类在尖括号泛型类型参数列表
//--T
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
})();
/*------number数字类型-----*/
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
/*------string字符串类型-----*/
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) { return x + y; };
alert(stringNumeric.add(stringNumeric.zeroValue, "test"));
//-function用extends关键继承这个ILength接口约束。。
function loggingIdentity(arg) {
    console.log(arg.length); //获取这个length值
    return arg;
}
//调用这个loggingIdentity方法
var object = loggingIdentity({ length: 10, value: 3 });
/**
 *在使用泛型类的类型
 *当我们用typescript去创建工厂的时候，因此有必要通过其构造函数来引用类类型
 */
function create(c) {
    return new c();
}
/**
 *使用:一个更高级的示例使用原型属性来推断和约束的构造函数和类类型的实例侧之间的关系
 */
//养蜂人
var BeeKeeper = (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
})();
//动物管理人.
var ZooKeeper = (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
})();
//动物
var Animals = (function () {
    function Animals() {
    }
    return Animals;
})();
//蜜蜂
var Bee = (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        _super.apply(this, arguments);
    }
    return Bee;
})(Animals);
//狮子
var Lion = (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        _super.apply(this, arguments);
    }
    return Lion;
})(Animals);
//管理人.
function findKeeper(a) {
    return a.prototype.keeper;
}
//findKeeper(Lion).nametag;  // 检查类型!
/**
 *jQuery----
 *
 */
$(function () {
    var len = $(object).attr("length"); //获取这个length值
    var value = $(object).attr("value"); //获取这个value值
    //alert(len);
    //alert(value);
    //var obj1:Animals=Lion;
    //console.log( findKeeper(Lion).nametag);//检查类型!
});
