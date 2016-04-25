/*
    题目描述：
    Given the string representations of two integers, return the string representation of the sum of those integers.

    For example:

    sumStrings('1','2') // => '3'
    
    Are you kidding me?这么简单给一个四级的题？是你傻还是我傻？
    事实证明还是我傻。
    js支持的最大整数是15位，一旦字符串长度超过15就GG了。
    先判断两个数的长度，太长的话就从后往前，每14放一个数组里。
    然后分别相加，最后在合并起来。
    这里要注意，进位的问题，除了最前的那个数组，其他的如果有进位要处理好进位的问题，一句两句也解释不了。代码里注释吧。
*/
function sumStrings(a,b) { 
  if(a.length > 14 || b.length > 14){
    var ai = Math.ceil(a.length/14), aarr = [];
    var bi = Math.ceil(b.length/14), barr = [];
    var arr = []; var str = "";
    var x = (ai > bi) ? ai : bi;
    for(var i = 0; i < x; i++){
      aarr[i] = a.substring(a.length-14*(i+1),a.length-14*i);
      barr[i] = b.substring(b.length-14*(i+1),b.length-14*i);
    }
    for(var j = 0; j < x; j++) {
      var longer = (aarr[j].length > barr[j].length) ? aarr[j].length : barr[j].length;
      arr[j] = (Number(aarr[j]) + Number(barr[j])).toString();
      if(arr[j].length > longer && j != x-1) { //处理进位
        aarr[j+1] = (Number(aarr[j+1]) + Number(arr[j][0])).toString();
        arr[j] = arr[j].substring(1);
      } 
    }
    for(var k = x - 1; k >= 0; k--) {
      str = str + arr[k];
    }
    return str;
  } else {
      return (Number(a) + Number(b)).toString();
  }
}