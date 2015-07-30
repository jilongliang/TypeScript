
/// <reference path="../plugins/typescript/typings/jquery.d.ts" />


//引入ValidationUtils3.ts文件,前面这个是用了module块关键字定义ts文件，需要用reference与path引入.
import validation = require('test4/ValidationUtils4');
import telValidator = require('test4/TelValidator4');
import emailValidator = require('test4/EmailValidator4');


//-------------------显示信息1---------------------
function showMsgs1() : void { 
    
    //--方法一---
    var  telObj=new telValidator();//
    
    var tel : string="13697811809";
    var flag : boolean=telObj.isAcceptable(tel);//调用TelValidator类的isAcceptable方法
    
    console.log(flag? tel+" 匹配 " : tel+"\t 不匹配 ");
    
    $("#msg1").html(flag? "<span style='color:red;'>"+tel+" 匹配</span> " : "<span>"+tel+"\t 不匹配</span>");
    
}


$(function (){ 

    showMsgs1();
});