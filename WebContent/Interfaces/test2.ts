/**
 * Not all properties of an interface may be required. 
 * Some exist under certain conditions or may not be there at all
 *并非需要一个接口的所有属性。在某些条件下的一些存在或可以不存在的。
 *这句话说的是：就算你SquareConfig接口定义的变量是color，到调用createSquare的时候你给color1变量照样可以取出z值来
 *这个值只不过是：默认的newSquare的white值，如果是一样的color变量他就会取出你给赋格对象的color(red)
 */


interface SquareConfig {
  color?: string;
  width?: number;
}
/***************创建一个对象function.**************/
function createSquare(config: SquareConfig): {color: string; area: number} {
    //此时newSquare里面的参数必须与 :后面里面的参数名称一致.
     var newSquare = {color: "white", area: 100};
    
      if (config.color) {
          newSquare.color = config.color;
      }
      if (config.width) {
          newSquare.area =  newSquare.area * config.width;
      }
      return newSquare;
}


//--createSquare返回的对象是newSquare，所有只能获取color和area并获取不了width这个属性的值..

var mySquare1 = createSquare({color: "red"});//与接口的变量color一样，此时这个值是取出是默认值color=red
var mySquare2 = createSquare({color1: "red"});//与接口的变量color不一样，此时这个值是取出是默认值color=white
console.log(mySquare1.color+"=="+mySquare1.area);//
console.log(mySquare2.color+"=="+mySquare2.area);//

var mySquare3 = createSquare({color: "yellow",width:80});//这里给了两个变量值，一个是color，一个是width
console.log(mySquare3.color+"=="+mySquare3.area);//所以这个值必须等于8000












