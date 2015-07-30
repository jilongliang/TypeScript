/**
 *Generic Classes 
 *
 */

//泛型类也有类似形状的通用接口。泛型类在尖括号泛型类型参数列表

//--T
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
/*------number数字类型-----*/
var myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function(x, y) { return x + y; };

/*------string字符串类型-----*/
var stringNumeric = new GenericNumber<string>();
    stringNumeric.zeroValue = "";
    stringNumeric.add = function(x, y) { return x + y; };

alert(stringNumeric.add(stringNumeric.zeroValue, "test"));


//-----------------Generic Constraints----

/*****声明一个接口,来约束**********/
interface ILength {
    length: number;//声明一个number类型
}

//-function用extends关键继承这个ILength接口约束。。
function loggingIdentity<T extends ILength>(arg: T): T {
    console.log(arg.length);  //获取这个length值
    return arg;
}

//调用这个loggingIdentity方法
var object=loggingIdentity({length: 10, value: 3});  


/**
 *在使用泛型类的类型
 *当我们用typescript去创建工厂的时候，因此有必要通过其构造函数来引用类类型
 */


function create<T>(c: {new(): T; }): T { 
    return new c();
}


/**
 *使用:一个更高级的示例使用原型属性来推断和约束的构造函数和类类型的实例侧之间的关系
 */

//养蜂人
class BeeKeeper {
    hasMask: boolean;
}
//动物管理人.
class ZooKeeper {
    nametag: string; 
}
//动物
class Animals {
    numLegs: number;
}
//蜜蜂
class Bee extends Animals {
    keeper: BeeKeeper;
}
//狮子
class Lion extends Animals {
    keeper: ZooKeeper;
}
//管理人.
function findKeeper<A extends Animals, K> (a: {new(): A; 
    prototype: {keeper: K}}): K {

    return a.prototype.keeper;
}

 //findKeeper(Lion).nametag;  // 检查类型!



/**
 *jQuery----
 *
 */
$(function(){ 

   var  len=$(object).attr("length");//获取这个length值
   var  value=$(object).attr("value");//获取这个value值
    
    //alert(len);
    //alert(value);
    
    //var obj1:Animals=Lion;
    
     //console.log( findKeeper(Lion).nametag);//检查类型!
    
});