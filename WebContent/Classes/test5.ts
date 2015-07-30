 /// <reference path="../plugins/typescript/typings/jquery.d.ts" />

/**
 * public/private
 * 默认是public
 * 您可能已经注意到，在我们还没有使用这个词“公众”作出任何类可见的成员的上述例子。
 * 如C＃语言要求每个成员被明确标记为'公共'可见。在打字稿，每个成员都是公共默认。
 * 您可能仍然标记成员的私人，所以你控制什么是公开可见的外部类的
 */
class MyAnimal {
    private name:string;
    //构造方法
    constructor(private  theName : string){ 
        this.name = theName;
    }
    
    getMsg(name : string):string{
        return this.name=name;
    }
    
}
//犀牛
class Rhino extends MyAnimal{ 
    constructor(){ 
        super("犀牛");
    }
    getMsg(name : string):string{
        return name;
    }
    
} 
//员工
class Employees {
    private name:string;
     //构造方法
    constructor(theName : string) { 
        this.name = theName;
    }   
}


var animal = new MyAnimal("山羊");//Goat山羊
var retMsg1=animal.getMsg("鹿");

var rhino = new  Rhino();

var employees = new Employees("洪七公");

animal = rhino;
//animal = employees;//此时这个值不能赋给animal，并不能编译通过.


$(function(){ 
    $("#msg1").html("<span style='color:red'>"+retMsg1+"</span>");

});




