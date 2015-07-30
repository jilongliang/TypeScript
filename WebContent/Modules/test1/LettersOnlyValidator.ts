/// <reference path="Validation.ts" />


module Validation {
    //匹配A-Z,a-z的英文
    var lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}