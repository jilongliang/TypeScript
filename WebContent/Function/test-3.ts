/**
 * this的使用..
 *在 JavaScript，this的变量一个函数被调用的变量。这使得它成为非常强大和灵活的功能，
 *但它是在总是具有了解，一个功能被执行的情况下的成本。这可以是出了名的混乱，例如，当一个函数被用作一个回调。
 */

function getMeMsg1():void{ 
    var suits1=["hearts", "spades", "clubs", "diamonds"];

    var deck1 = {
        suits:suits1,
        cards: Array(52),
        createCardPicker: function() {
            return function() {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return {suit: this.suits[pickedSuit], card: pickedCard % 13};
            }
        }
    }

    var cardPicker1 = deck1.createCardPicker();
    var pickedCard1 = cardPicker1();

    alert("card1: " + pickedCard1.card + " of " + pickedCard1.suit);

}
 

/**
 * 我们可以通过确保修复此功能被绑定到正确的'this'之前，我们返回函数供以后使用。这样一来，
 * 不管如何其以后使用时，它仍可以看到原来的“甲板”对象
 * 为了解决这个问题，我们切换函数表达式使用lambda语法（（）=>{}），而不是JavaScript函数表达式。
 * 这将自动捕捉“这个”可被创建，而不是被调用时，它的功能时：
 */

function getMeMsg2():void{  
    var deck2 = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function() {
            //使用lambda表达式去捕捉this用法.
            return () => {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                console.log(this.suits[pickedSuit]);
                console.log(pickedCard % 13);
                
                return {suit: this.suits[pickedSuit], card: pickedCard % 13};
            }
        }
    }
    
    var cardPicker2 = deck2.createCardPicker();
    var pickedCard2 = cardPicker2();
    
    alert("card2: " + pickedCard2.card + " of " + pickedCard2.suit);

}


$(function(){ 
    
    getMeMsg2();
});


