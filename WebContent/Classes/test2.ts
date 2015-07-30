 /// <reference path="../plugins/typescript/typings/jquery.d.ts" />

//--class和constructor构造器使用。

 class UserInfo{ 
    username:string;
    //--默认的构造方法..
    constructor(msg : string){ 
        this.username=msg;//从构造方法传一个用户字符串过去.
    }
    getUserInfo(){ 
         return "欢迎您, " + this.username; 
    }
 }  

function printMsg():string{ 
    var resMsg:string="";
    
    var g=new UserInfo("龙梅子");//创建一个UserInfo对象,并且构造函数必须要传一个字符串.
    
    resMsg=g.getUserInfo();//调用对象方法.
    return resMsg;
}

/****************jQuery-执行..**********************/

$(function(){ 
    var result=printMsg();
    $("#msg").html("<span style='color:green;'>"+result+"<span>"); 
    
});