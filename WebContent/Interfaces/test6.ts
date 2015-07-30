/// <reference path="../plugins/typescript/typings/jquery.d.ts" />

//Extending Interfaces
interface IShape{ 
    color:string;
    
}
interface PenStroke {
    penWidth: number;
}
//--接口继承接口,用，分割开多继承.
interface ISquare extends IShape,PenStroke {
    sideLength: number;
}

//---赋值..
var square = <ISquare>{};

square.color="red";
square.sideLength=100;
square.penWidth=50;


