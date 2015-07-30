    /**import、require、export关键的使用..***********/

    //--导入--ValidationUtils3.ts文件---
    import validation = require('./ValidationUtils3');

    //　匹配email正则表达式
    var emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    export class EmailValidator implements validation.StringValidator {
        isAcceptable(s: string) {
            return emailReg.test(s);
        }
    }
