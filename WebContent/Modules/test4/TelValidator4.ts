   /**export = 对象 的使用*/


    import validation = require('./ValidationUtils4');

    //匹配移动电话号码
    var telReg=/^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
    
     class TelValidator4 implements validation.StringValidator{ 
         isAcceptable(s:string){ 
            return  telReg.test(s);
         }
    }

    export = TelValidator4;//