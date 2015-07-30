/**
 * Generic Types
 */

/**
 * 
 *在前面的章节中，我们创建了工作的范围内的类型的通用身份的功能。在本节中，我们将探讨的功能类型本身,
 *以及如何创建通用接口.通用函数的类型就像那些非通用功能，具有类型参数首家上市，类似于函数声明
 */

function identity3<T>(arg: T): T {
    return arg;
}

var myIdentity3: <T>(arg: T)=>T = identity3;


/**
 * 我们也可以用不同的名称在类型一般类型参数，所以只要类型变量的数量和如何类型变量用于排队
 */

function identity4<T>(arg: T): T {
    return arg;
}

var myIdentity4: <U>(arg: U)=>U = identity4;

/**
 * 我们也可以写泛型类型为对象文本类型的调用签名
 */

function identity5<T>(arg: T): T {
    return arg;
}

var myIdentity5: {<T>(arg: T): T} = identity5;



/**
 * 这使我们写我们的第一个通用interface接口。让我们以字面对象从以前的例子，它移动到一个界面：
 */

interface GenericIdentityFn1 {
    <T>(arg: T): T;
}

function identity6<T>(arg: T): T {
    return arg;
}

var myIdentity6: GenericIdentityFn1 = identity6;


/**
 * 在一个类似的例子，我们可能要移动的通用参数是整个接口的参数。这让我们看到什么类型，我们是在通用
 * （如：Dictionary<String>而不仅仅是字典）。这使得该类型参数可见的接口的所有其他成员。
 */

interface GenericIdentityFn2<T> {
    (arg: T): T;
}

function identity7<T>(arg: T): T {
    return arg;
}

var myIdentity7: GenericIdentityFn2<number> = identity7;


