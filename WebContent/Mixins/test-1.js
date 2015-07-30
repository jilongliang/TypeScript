/**
 * Mixin使用.
 *
 *随着传统的面向对象的层次结构，从可重用的组件建立类的另一种流行的方式是通过简单的组合部分类来构建他们。
 *你可能熟悉混入或性状比如Scala语言的理念，模式也达到了JavaScript的一些社区人气
 */
// Disposable Mixin(一次性)
var Disposable = (function () {
    function Disposable() {
    }
    Disposable.prototype.dispose = function () {
        this.isDisposed = true;
    };
    return Disposable;
})();
// Activatable Mixin(激活混入)
var Activatable = (function () {
    function Activatable() {
    }
    Activatable.prototype.activate = function () {
        this.isActive = true;
    };
    Activatable.prototype.deactivate = function () {
        this.isActive = false;
    };
    return Activatable;
})();
//SmartObject类实现Disposable与Activatable类
var SmartObject = (function () {
    function SmartObject() {
        var _this = this;
        // Disposable
        this.isDisposed = false;
        // Activatable
        this.isActive = false;
        setInterval(function () { return console.log(_this.isActive + " : " + _this.isDisposed); }, 500);
    }
    //相互作用
    SmartObject.prototype.interact = function () {
        this.activate();
    };
    return SmartObject;
})();
applyMixins(SmartObject, [Disposable, Activatable]);
var smartObj = new SmartObject();
setTimeout(function () { return smartObj.interact(); }, 1000);
////////////////////////////////////////
// In your runtime library somewhere
//在您的运行时库的地方
////////////////////////////////////////
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
