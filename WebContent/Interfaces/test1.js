/*********获取用户信息*******/
function getUserInfo(user) {
    return user.age + "======" + user.userName;
}
//用一个数组对象作为一个user对象传值过getUserInfo函数方法..参数必须要以接口IUserInfo对应上.
//少传一个参数，typescript会自动帮你检测报错,如果用纯javascript去写的话，不会报错，ts大大减少检查js问题
//如：var userObj={userName:'周伯通'};//error
var userObj = { userName: '周伯通', age: 100 };
$(function () {
    //定义变量接收值..
    var userInfo = getUserInfo(userObj);
    console.log(userInfo);
});
