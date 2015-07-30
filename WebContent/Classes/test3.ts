 /// <reference path="../plugins/typescript/typings/jquery.d.ts" />

//------class与supper使用.----------------

//--动物类 
class Animal {
    name:string;//名称
    //默认构造方法
    constructor(theName: string) {
        this.name = theName; 
    }
    //声明一个移动方法，并且传一个距离meters参数.
    move(meters: number = 0) {
        alert(this.name + " 跑了 " + meters + "米.");
    }
}

//--蛇
class Snake extends Animal {
    constructor(name: string) { 
        super(name); 
    }
    //蛇是移动了5米
    move(meters = 5) {
        alert("蛇进行跑.....");
        super.move(meters);//调用Animal声明的move方法
    }
}
//马
class Horse extends Animal {
    constructor(name: string) { 
    super(name); 
    }
    move(meters = 45) {
        alert("马进行跑...");
        super.move(meters);
    }
}

var sam = new Snake("蛇加油");

var tom: Animal = new Horse("马加油");//Animal

sam.move();//
tom.move(38);//如果知道马跑多少米，给一个距离米,故马是跑了38米