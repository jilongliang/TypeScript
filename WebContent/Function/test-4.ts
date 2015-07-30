/**
 * 
 *JavaScript是本质上是一种非常好的动态的语言。这并意味都通用的一个JavaScript函数返回基于对传入的参数的形状不同类型的对象。
 * 
 */


var suits = ["hearts", "spades", "clubs", "diamonds"];

//--实例一
function getThisMsgs1():void{ 

        function pickCard1(x): any {
        // 判断这个x是不是object/array
        if (typeof x == "object") {
            var pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        //  判断
        else if (typeof x == "number") {
            var pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }

    var myDeck1 = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
    var pickedCard1 = myDeck1[pickCard1(myDeck1)];
    alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
    
    var pickedCard2 = pickCard1(15);
    alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
    
    }


//--实例二
function getThisMsgs2():void{  
    function pickCard(x: {suit: string; card: number; }[]): number;
    function pickCard(x: number): {suit: string; card: number; };
    function pickCard(x): any {
        // Check to see if we're working with an object/array
        // if so, they gave us the deck and we'll pick the card
        if (typeof x == "object") {
            var pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        // Otherwise just let them pick the card
        else if (typeof x == "number") {
            var pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }
    
    var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
    var pickedCard1 = myDeck[pickCard(myDeck)];
    alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
    
    var pickedCard2 = pickCard(15);
    alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
}





$(function(){ 
    getThisMsgs2();   

});
