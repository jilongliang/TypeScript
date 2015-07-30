
//--typescript的function类型结合javascript的search函数使用

interface searchFunt{
    //声明一个两个变量..
    (source: string, subString: string): boolean;
}

var mySearch : searchFunt;//声明一个interface变量接收
    mySearch = function(source:string,subString:string){
   var result = source.search(subString);
      if (result == -1) {
        return false;
      }
      else {
        return true;
      }
}

$(function(){
      var source:string ="this is ok";
      var subString1:string ="ok";
      var subString2:string ="not";
      var result:boolean;
       
      var result1= mySearch(source,subString1);//从source字符串上面找ok，返回值是true
      var result2= mySearch(source,subString2);//从source字符串上面找not，返回值是false
      alert(result1);//
      alert(result2);
});

