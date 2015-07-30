/**
 * 不使用Module,如果我们在typescript使用了module函数，则生成的代码在浏览器端执行时，需要有一些script loader的支持。
 * 对于浏览器端代码，我们一般生成amd风格的代码，所以需要找一个支持amd的库放在前端。这样的库有很多
 */

export interface StringValidator {
    isAcceptable(s: string): boolean;
}