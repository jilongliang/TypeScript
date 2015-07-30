    /**export = 对象 的使用*/

    import validation = require('./ValidationUtils4');

    //　匹配email正则表达式
    var emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
     class EmailValidator4 implements validation.StringValidator {
        isAcceptable(s: string) {
             
            return emailReg.test(s);
        }
    }
    export = EmailValidator4; 