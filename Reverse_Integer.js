/*
LeetCode支持JS后，今天准备在上面刷几道题的，没想到第一题就把我给困住了。
题目描述：
    Reverse digits of an integer.
    Example1: x = 123, return 321
    Example2: x = -123, return -321
首先方法就不多说了，先转成字符串，再转成数组倒序，再转成字符串，再转成数字
满心欢喜以为可以了，一看测试出错，正负值要判断，再一通?:
好了这下没问题了吧，一堆长得不行的测试数又出来了，这不是2^31次方么，看了一下JS支持的整数范围不是-2^53~2^53吗
好吧估计只是支持了JS一些语法，这些还是要按C++那些来。
再加上一通判断，这下总没问题了吧……还是failed，要崩溃了，堵这儿快半个小时了。
好吧在仔细想想，转过来的数字也要在Int的范围里面才行啊。
Accepted！终于可以了！  
*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var t = (x>=0)?true: false;
    var str = (t)?(x+""):((x+"").substr(1));
    var arr = str.split("");
    arr.reverse();
    str  = arr.join("");
    y = (t)?(str-0):(-(str-0));
        if(x>Math.pow(2,31) || y>Math.pow(2,31) || x<=-Math.pow(2,31) || y<=-Math.pow(2,31)) return 0;
    return y;
};