/// <reference path="../plugins/typescript/typings/jquery.d.ts" />
//Array Types

interface StringArray {
  [index: number]: string;
  //length: number;
}
var myArray:StringArray;

myArray = ["Bob", "Fred"];


$(function(){
      $.each(myArray,function(key,val){
         alert(val);
      });
});

