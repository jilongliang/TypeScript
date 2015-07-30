/**import、require、export关键的使用..***********/

//--导入--ValidationUtils3.ts文件---
import validation = require('./ValidationUtils3');

    //匹配移动电话号码
    var telReg=/^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
    
    export class TelValidator implements validation.StringValidator{ 
         isAcceptable(s:string){ 
            return  telReg.test(s);
         }
    }

