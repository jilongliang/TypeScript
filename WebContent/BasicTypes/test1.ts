/**
 *@date:2015-07-16
 *@Author:liangjilong
 *==============================================================================
 *==================================TypeScript - 基本类型=======================
 *==============================================================================
 */

//对于程序来说我们需要基本的数据单元,如：numbers, strings, structures, boolean 等数据结构。
//在TypeScript中我们支持很多你所期望在JavaScript中所拥有的数据类型系统。
//var isFlag:boolean=false;这个 : 号代表应该是代表继承的意思，从C#的.cs文件可以看出来，
//public class IndexController : Controller,Typescript也是微软开发出来的一个超级js

//1、声明一个boolean类型默认值是false
//在JavaScript和TypeScript中也具有最基本的逻辑断言值true/false，采用’boolean’类型。
var isFlag:boolean=false;

//2、声明一个number类型值
//如JavaScript，TypeScript所有的数值类型采用浮点型计数，其类型为‘number’。

var orderNumber:number=100;

//3、声明一个String类型
//在webpages的JavaScript或者服务端的应用程序最基本的功能就是处理文本数据。在其他语言中大多使用’string’去代表文本数据类型。
//TypeScript和JavaScript一样也是用双引号(“)或者单引号包裹文本数据
var userName:string="龙梅子";

//4、数组Array
//在TypeScript中如JavaScript一样允许我们操结合操作。数组类型可以使用下边两种方式之一
//第一种方式，你可以在数据类型之后带上’[]‘:
var list:number[] = [1, 2, 3];
//第二种方式，也可以采用泛型的数组类型：
var list1:Array<number> = [1, 2, 3];//泛型数组

//5、枚举Enum
//TypeScript为JavaScript新增了枚举这种标准的集合数据类型。和在c#中一样，枚举是为一组数值类型一组更友好的名称：
//

//------------------------------
enum Color {Red, Green, Blue};//enum关键字 枚举对象{声明变量}
var c1: Color = Color.Green;//从枚举里面拿出绿色出来赋给一个叫c的变量

//---------手动枚举所有值都设置---------------------
//默认枚举类型其实数值从0开始，你可以可用手动设置某一个成员的数值。例如我们可以将上文的起始值定为1：
enum Color1 {Red = 1, Green = 2, Blue = 4};
var c2: Color1 = Color1.Green;

//---------手动设置全部的枚举成员：---------------------
enum Color2 {Red = 1, Green, Blue};
var colorName: string = Color2[2];

alert(colorName);


/**
 *我们可能需要描述变量的类型，当我们编写的应用程序，我们可能不知道。
 *这些值可能来自动态内容，例如从用户或第三方库。在这种情况下，我们要退出类型检查的，
 *让价值观通过编译时检查，要做到这一点，我们的标签，这些与'任何'类型：
 */

//6、any
//any’类型是一种强大的兼容存在的JavaScript库的类型系统。他允许跳过TypeScript的编译时类型的检查。
//‘any’类型对于我们只知道部分数据类型，但是不是所有的数据类型的类型系统。如一个混合了多种类型的集合数组
var notSure: any = 4;//notSure这个是不确定的值，默认先给一个数字4
notSure = "this string";//改变这个值为this string
notSure = false; //最终确定的值是一个boolean值.
//------------------

var list2:any[] = [1, true, "free"];

list2[1] = 100;

    
//7、void和‘any’相对的数据类型则是’Void‘，它代表没有任何数据类型。我们常用的一个方法没有任何返回值：
//,格式如：function doMain:void{}

function warnUser(): void {
    alert("This is my void");
}





 