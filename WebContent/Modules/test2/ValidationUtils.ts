/**
 *声明一个ValidationUtils工具块module
 *推荐使用.
 */
module ValidationUtils{ 
    
    //-声明StringValidator字符串验证器.
     export interface StringValidator { 
         isAcceptable(str: string): boolean;//是否接受.
    }
    
    //　匹配email正则表达式
    var emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    export class EmailValidator implements StringValidator {
        isAcceptable(s: string) {
            return emailReg.test(s);
        }
    }
    
    //匹配移动电话号码
    var telReg=/^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
    
    export class TelValidator implements StringValidator{ 
         isAcceptable(s:string){ 
            return  telReg.test(s);
         }
    }
    
}