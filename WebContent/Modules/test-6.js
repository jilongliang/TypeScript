//引入node.d.ts文件
///<reference path="test6/node.d.ts"/>
define(["require", "exports", "url"], function (require, exports, url) {
    var myUrl = url.parse("http://www.typescriptlang.org");
    $(function () {
        alert(myUrl);
        //$("#msg1").html(myUrl);
    });
});
