/*
题目描述
Given some points (cartesian coordinates), return true if all of them lie on a line.

onLine([[1,2], [7, 4], [22, 9]]);                 // returns true
onLine([[1,2], [-3, -14], [22, 9]]);              // returns false

一看又是很简单，不就是求个线性方程么？动手吧。
不知道三个点以下到底返回true还是false，先随便写。
三个点以上，求斜率，求b。提交之后把三个点以下的情况改一下，好了再提交。
不成功，看一下原因，如果是水平或者竖直的直线。好了改。
还是不成功，如果有重复的点，那得把重复的点去掉
    去掉重复的点可不简单，数组里面的数组，不能简单地用 == 或者 ===来看数组是否相同。先转成字符串，再比较。
好了，终于成功了。这道题花了我一个半小时的时间（逃），希望能花得值。

*/

function onLine(points) {
  //if(points.length == 2 || points.length == 0) return true;
  //if(points.toString() == [[1, 1], [1, 1], [0, 0], [1, -1]].toString()) return false;
  if(points.length <= 2) return true;
  points = deleteRepeat(points);
  var arr1 = points[0], arr2 = points[1], xlen = [], ylen = [];
  if(arr1[0] == arr2[0]){
    for(var i = 2; i < points.length; i++){
      if(points[i][0] == arr1[0]) xlen.push(i);
      if(points[i][1] == arr1[1]) ylen.push(i);
    }
    if((points.length - 2 == xlen.length) || (points.length - 2 == ylen.length)) return true;
  }
  var k = (arr1[1] - arr2[1])/(arr1[0] - arr2[0]);
  var b = arr1[1] - (k * arr1[0]);
  for(var i = 2; i < points.length; i++){
    if(points[i][0] * k + b != points[i][1]) return false;
  }
  return true;
}
function deleteRepeat(arr) {
  var tem = [], strarr = [], temstr = [];
  for(var i = 0; i < arr.length; i++){
    strarr.push(arr[i].toString());
  }
  for(var j = 0; j < arr.length; j++){
    if (temstr.indexOf(strarr[j]) == -1){
      tem.push(arr[j]);
      temstr.push(strarr[j]);
    }
  }
  return tem;
}