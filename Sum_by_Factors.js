/*
    Description:

    Given an array of positive or negative integers

    I= [i1,..,in]

    you have to produce a sorted array P of the form

    [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

    P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java or C# and as an array of arrays in other languages.

    Example:

    I = [12, 15] 
    result = [[2, 12], [3, 27], [5, 15]]
    [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

    Note: It can happen that a sum is 0 if some numbers are negative!

    Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.
    
    
    是不是懵逼了。我光看题就花了20分钟才懂。简单来说，给你一组数，然后对于每个质数，是这个质数的倍数的加起来。我一解释是不是特别简单，来实现吧。
    
    好先把质数数组找出来，写个函数，参数是一个数字，返回比这个数字小的质数数组。
    什么不能直接调用这个函数？哦对先排序，要不然不知道哪个是最大的数。
    再定义一个数组，来存放结果。先把质数数组里的每个质数作为一个数组放进去，然后push进一个0，像这样[[2,0],[3,0],[5,0]...]
    好了开始循环了，先循环每个数，然后循环除以每个质数，余数为0的把结果数组[i][1]加上这个数。
    这样肯定不是最后的结果，有些质数没有倍数的，删掉。
    也不能全删，像这样的I = [15, 30, -45]，出来的[5, 0]就不能删掉，怎么判断它是没有数加还是加上之后变成0了呢，再取个数组存放每个质数的倍数的个数
    还没结束，要是有负数怎么办，那第一步就不能得到想要的结果，判断一下正负先。
    
    数组遍历真是门大学问
*/function sumOfDivided(lst) {
  lst = lst.sort();
  var tmp = prime((lst[lst.length-1] > 0) ? lst[lst.length-1]+1 : -lst[lst.length-1]+1);
  var arr = [], num = [];
  for (var x = 0; x < tmp.length; x++) {
    arr.push([tmp[x]]);
    arr[x].push(0);
    num[x] = 0;
  }
  for (var i = 0; i < lst.length; i++) {
    for (var j = 0; j < tmp.length; j++) {
      if (lst[i] % tmp[j] == 0) {
        arr[j][1] += lst[i];
        num[j]++;
      }
    }
  }
  for (var k = arr.length-1; k >= 0; k--) {
    if (num[k] == 0) arr.splice(k,1);
  }
  return arr;
}
var prime = function(len) {
  var i,j;
    var arr = [];
     
  for(i = 1; i < len; i++){
    for(j=2; j < i; j++){  
      if(i%j === 0) {
         break;
      }
    }
     
    if(i <= j && i !=1){
      arr.push(i);
    }
    
  }
  return arr;
}