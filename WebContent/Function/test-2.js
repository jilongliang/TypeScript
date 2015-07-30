/**
 * 一、function没有返回值，却返回了,虽然在写function的的时候不报错，调用的时候就报Error
 * 不像JavaScript中，在打字稿每参数的函数被假定为所要求的功能。这并不意味着它不是一个“空”值，
 * 而是，当函数调用编译器将检查该用户已经提供了对每个参数的值。编译器还假定这些参数是将被传递给函数的唯一参数。
 * 总之，参数的函数的数目必须匹配的参数的函数需要的数量。
 */
function buildName1(firstName, lastName) {
    return firstName + " " + lastName;
}
//var result1 = buildName1("Bob");  //error, too few parameters
//var result2 = buildName1("Bob", "Adams", "Sr.");  //error, too many parameters
//var result3 = buildName1("Bob", "Adams");  //ah, just right
/**
 * Rest parameters
 * 其余的参数
 *在JavaScript中，每一个参数被认为是可选的，用户可以不用管它，因为他们认为合适的。当他们这样做，他们认为是不确定的。
 *我们可以通过使用得到打字稿这个功能'？“旁边的参数，我们想要可选。例如，我们说，我们要的姓氏是可选：
 */
function buildName2(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName2("Bob"); //works correctly now
//var result2 = buildName2("Bob", "Adams", "Sr.");  //error, too many parameters
var result3 = buildName2("Bob", "Adams"); //ah, just right
/**
 * 必需，可选和默认参数都有一个共同点：他们大约在同一时间谈论一个参数。有时候，你想与多个参数的工作作为一个群体
 * ，或者你可能不知道有多少参数的函数将最终取,在JavaScript中，你可以使用的参数变量，它是每一个函数体中可见
 * 在TypeScript：您可以收集这些参数汇集成一个变量
 */
function buildName3(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");
/**
 * Rest parameters
 * 其余的参数都被视为可选参数无边号码。你可能会离开他们，或者你想要的。编译器将建立你的下省略号（...）
 * 后给予的名称传递给函数的参数数组，允许你使用它在你的函数
 */
function buildName4(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var buildNameFun = buildName4;
