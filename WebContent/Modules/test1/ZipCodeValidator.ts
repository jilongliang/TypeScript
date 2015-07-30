/// <reference path="Validation.ts" />
module Validation {
   //匹配0-9的数字.
    var numberRegexp = /^[0-9]+$/;
    
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            //如果长度=5并且是数字就返回一个true
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}