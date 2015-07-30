 /// <reference path="../plugins/typescript/typings/jquery.d.ts" />

//--这个是简单的class
class Employee {
    fullName: string;
}

var employee = new Employee();
employee.fullName = "Long long";//赋值


//说明这个属性是存在的..
if (employee.fullName) {
    alert(employee.fullName);
}