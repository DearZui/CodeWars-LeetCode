/*
题目描述：
    Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

    Example:
    For num = 5 you should return [0,1,1,2,1,2].

    Follow up:

    It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
    Space complexity should be O(n).
    Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
    
    意思其实就是0~num这么多数每个用二进制表示，然后统计每个二进制数中1的个数。
    时间复杂度应该为O(n)
    
    JS有split函数，用的是正则表达式，应该时间复杂度还是O(n)吧。这个我也不是很懂。
*/
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var j, n, arr = [];
    for(var i = 0; i <= num; i++){
        j = parseInt(i).toString(2);
        n=(j.split('1')).length-1;
        arr.push(n);
    }
    return arr;
};