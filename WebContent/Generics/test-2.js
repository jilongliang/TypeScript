/**
 * Working with Generic Type Variables
 * 与泛型类型变量
 */
function _identity1(arg) {
    return arg;
}
/**
 * 如果还想记录的说法“arg”与每个调用控制台的长度。我们也许会这样写
 */
function loggingIdentity1(arg) {
    // console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
/**
 *当我们这样做时，编译器会给出我们，我们使用的是“ARG”的“.length”成员的错误，但远不具备，我们说，“ARG”有这样的成员。请记住，我们在前面说，这些类型变量站在任何和所有类型的，所以有人使用此功能可以通过在一个'数'，而不是，它没有一个“.length”成员。
 *比方说，我们实际上已经预期该功能直接对T的阵列，而那件T的工作。由于我们正在使用的阵列，对象.length成员应该可用。我们可以这样描述这就像我们将创建其他类型的数组：
 */
function loggingIdentity2(arg) {
    console.log(arg.length);
    return arg;
}
/**
 *我们还可以写成这样的模式 ，一个数组.length,这样避免更多的错误
 */
function loggingIdentity3(arg) {
    console.log(arg.length);
    return arg;
}
