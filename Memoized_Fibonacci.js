/*
    题目描述不多说了，大概就是斐波那契的优化算法。
    以前只知道递归，算法方面基础不是很牢，正好学习下
*/
/*
    首先最经典的递归算法
 */

function fibonacci(n) {
    if(n==0 || n == 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

/*
    好放console里跑一下，3，没问题，10，没问题，35，有点吃力了，45，直接GG。
    还在考虑是不是数太大了，来换一种算法来。
    不用递归了，用循环。
*/

var fibonacci = function(n) {
    if(n==0 || n == 1)
        return n;
    var tempResult = [];
    tempResult[0] = 0;
    tempResult[1] = 1;
    for(var i = 2; i <=n; ++i){
      tempResult[i] = tempResult[i-1] + tempResult[i-2];
    }
    return tempResult[n];
}

/*
    好兴奋，放console里跑一下。有信心直接上45，毫无压力，上70，还是秒回，上100，依旧秒回。急了我直接上1000，"4.346655768693743e+208"根本停不下来。
    好了至此我以为这是最好的算法了。不信？google一下，我果然又错了，上面这种算法时间复杂度能达到O(n),可是还有一种矩阵乘法的算法，可以达到O(logn),看一下什么原理。
    图不好放。这样好了arr1 = [Fibonacci(n), Fibonacci(n-1)];arr2 = [1, 1][1, 0];arr3 = [Fibonacci(n-1), Fibonacci(n-2)];arr4 = [Fibonacci(1), Fibonacci(0)]
    arr1 = arr2 * arr3
    那么arr1 = arr2^(n-1) * arr4;
    就不实现了，逃。
*/