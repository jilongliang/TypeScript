/**
 * Merging Modules
 * 合并块.
  *要合并的价值，在每一个网站的声明，如果一个模块已经给定名称存在，它进一步采取现有的模块
  *并添加第二个模块第一的出口成员扩展。
  */
var MAnimals;
(function (MAnimals) {
    var Zebra = (function () {
        function Zebra() {
        }
        return Zebra;
    })();
    MAnimals.Zebra = Zebra;
})(MAnimals || (MAnimals = {}));
var MAnimals;
(function (MAnimals) {
    var Dog = (function () {
        function Dog() {
        }
        return Dog;
    })();
    MAnimals.Dog = Dog;
})(MAnimals || (MAnimals = {}));
//---这个MYAnimals块等同上面两个module
var MYAnimals;
(function (MYAnimals) {
    var Zebra = (function () {
        function Zebra() {
        }
        return Zebra;
    })();
    MYAnimals.Zebra = Zebra;
    var Dog = (function () {
        function Dog() {
        }
        return Dog;
    })();
    MYAnimals.Dog = Dog;
})(MYAnimals || (MYAnimals = {}));
/**
 * 模块合并的这种模式是一个有用的起点，但要得到我们还需要了解同非成员国导出会发生什么更完整的场景画面。
 * 非导出成员只有原来的（未合并）模块中可见,这意味着合并后，合并的成员，来自其他声明无法看到非成员导出
 */
var myAnimal;
(function (myAnimal) {
    var haveMuscles = true;
    function animalsHaveMuscles() {
        return haveMuscles;
    }
    myAnimal.animalsHaveMuscles = animalsHaveMuscles;
})(myAnimal || (myAnimal = {}));
var myAnimal;
(function (myAnimal) {
    function doAnimalsHaveMuscles() {
        //return haveMuscles;  // 这里这个值是不可以返回.
    }
    myAnimal.doAnimalsHaveMuscles = doAnimalsHaveMuscles;
})(myAnimal || (myAnimal = {}));
/**
 * Merging Modules with Classes, Functions, and Enums
 * 合并模块与类，函数和枚举
 *
 * 模块具有足够的灵活性，以也与其它类型的声明合并。要做到这一点，该模块声明必须遵循的声明，将与合并。
 * 由此产生的声明有两种申报类型的属性。在typescript使用这个性能来模拟一些在JavaScript模式以及其它的编程语言
 */
var Album = (function () {
    function Album() {
    }
    return Album;
})();
var Album;
(function (Album) {
    var AlbumLabel = (function () {
        function AlbumLabel() {
        }
        return AlbumLabel;
    })();
    Album.AlbumLabel = AlbumLabel;
})(Album || (Album = {}));
