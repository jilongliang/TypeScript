/**
 * Mixin使用.
 * 
 *随着传统的面向对象的层次结构，从可重用的组件建立类的另一种流行的方式是通过简单的组合部分类来构建他们。
 *你可能熟悉混入或性状比如Scala语言的理念，模式也达到了JavaScript的一些社区人气 
 */

// Disposable Mixin(一次性)
class Disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }
 
}
 
// Activatable Mixin(激活混入)
class Activatable {
    isActive: boolean;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}
 
//SmartObject类实现Disposable与Activatable类
class SmartObject implements Disposable, Activatable {
    constructor() {
        setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
    }
 
    //相互作用
    interact() {
        this.activate();
    }
 
    // Disposable
    isDisposed: boolean = false;
    dispose: () => void;
    // Activatable
    isActive: boolean = false;
    activate: () => void;
    deactivate: () => void;
}
applyMixins(SmartObject, [Disposable, Activatable])
 
var smartObj = new SmartObject();
setTimeout(() => smartObj.interact(), 1000);
 
////////////////////////////////////////
// In your runtime library somewhere
//在您的运行时库的地方
////////////////////////////////////////

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    }); 
}