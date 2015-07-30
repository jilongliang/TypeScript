//------------别名的使用..
//--声明一个--Shapes块别名--
module Shapes { 
     //===========================多边形===========================
     export module Polygons { 
        //===========================三角形===========================
        export class Triangle {  
            side : number = 3;//声明边一个变量，并且给一个默认值..
            theName : string;//声明一个名字
            //声明构造方法--传一个名字的参数..
            constructor(strName : string) { 
                this.theName = strName;
            }
            //计算三角形,获取面积，这里为了返回一个构造方法的传进来的字符串，故返回类型给了一个any类型..
            getTriangleArea(side : number) : any{ 
               return this.theName+ this.side*side;
            }
        }
        //===========================正方形===========================
        export class Square { 
            side : number = 8;//声明边一个变量，并且给一个默认值..
            theName : string;//声明一个名字
            //声明构造方法--传一个名字的参数..
            constructor(strName : string) { 
                this.theName = strName;
            }
            //---计算正方形,获取面积
            getSquareArea(side : number) : any{ 
               return this.theName+ this.side*side;
            }
        }
    }
}





