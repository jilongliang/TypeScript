/// <reference path="../plugins/typescript/typings/jquery.d.ts" />

//Hybrid Types(混合型)


//--计算器
interface Counter  {
   (start: number): string;//声明一个开始变量
   interval:number;//声明一个间隔变量
   reset(): void;//声明一个重置function方法
}

var c: Counter;

c(10);//开始.

c.interval=5.0;

c.reset();//重置.



