/*
    题目描述：
    seven(times(five())); // must return 35
    four(plus(nine())); // must return 13
    eight(minus(three())); // must return 5
    six(dividedBy(two())); // must return 3
    
    你可以想象我看到题目一脸懵逼的表情了吧。
    所以我对函数这一块还是薄弱得很，我服了，直接unlock solution。
    
    看到第一个解答，一脸更加懵逼，直接看不懂。
    
    还是先放我看得懂的解答吧。
*/

function zero(func)   { return func ? func(0) : 0; };
function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };

function plus( b )      { return function( a ) { return a + b; }; };
function minus( b )     { return function( a ) { return a - b; }; };
function times( b )     { return function( a ) { return a * b; }; };
function dividedBy( b ) { return function( a ) { return a / b; }; };

/*
    seven(times(five()));
    从内向外执行，先来five()
    func为空，return 5
    然后就是times(five()) ==> times(5)
    return function(a) { return a * 5};
    然后就是seven(times(five())) ==> seven( function(a) { return a * 5 } )
    func不为空，return func(7) ==> function(7) { return 7 * 5 } ==> 35
    
    好了接下来来看一下这个牛逼的我问了师兄才看懂的解法吧。
*/

var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }

/*
    其实跟第一个解法大同小异，还是seven(times(five()));
    先是five() ==> n(5) ==> function(5)
    return function(op) { return op ? op(5) : 5; }
    因为op == undefined, 所以return 5；
    然后就是times(5)
    return function(l) { return l * 5}
    接着seven( return function(l) { return l * 5} ) ==> function(7)
    function(7) {
        return function( function(l) {...} ) {
            return function(7)
        }
    }
    ==> return 7 * 5
    
    给我一个理由忘记，这么难懂的题。
*/