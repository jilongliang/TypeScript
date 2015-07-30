/// <reference path="../plugins/typescript/typings/jquery.d.ts" />

//Class Types(implements)

 interface IClock {
    currentTime: Date;
    setTime(d: Date);
}
  
//--实现IClock接口
class Clock implements  IClock{
    
    currentTime:Date;
    constructor(h: number, m: number) { }//--构造函数方法
    setTime(d:Date){
        this.currentTime=d;   
    }
}
 //--------------------------------------------------
interface IClock1 {
     new (hour: number, minute: number);
}
class Clock1  {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
 
var cs: IClock1 = Clock1;
var newClock = new cs(7, 30);

console.log(newClock);  
 
