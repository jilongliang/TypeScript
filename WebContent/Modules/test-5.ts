//-------import入module 块
import polygons = Shapes.Polygons;

var tg = new polygons.Triangle("三角形面积是："); 
var triangleArea=tg.getTriangleArea(3);//传一个3进去..


var sq = new polygons.Square("正方形面积是：");
var squareArea = sq.getSquareArea(8);


$(function () { 
    
    $("#msg1").html("<span style='color:red;'>"+triangleArea+"</span>");
    $("#msg2").html("<span style='color:red;'>"+squareArea+"</span>");

})