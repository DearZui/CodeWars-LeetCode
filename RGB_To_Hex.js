/*
    挺简单的一个题目的，把rbg转成16进制。没想到坑还挺多的。
    首先，想到三个数字，都转成16进制，字符串一拼接不久行了吗。
    出错，负数要变成0。
    好了再提交，还是错，大于255的数要变FF。
    还是错，一位数要加上0补成两位
    再错我就要爆粗口了，还是出错。
    小写要变大写。
    
    好好总结一下，一道很小的题目，暗坑还挺多的，编写代码的时候很多东西都要考虑到才行啊。
*/

function rgb(r, g, b){
  if(r < 0) r = 0;
  if(g < 0) g = 0;
  if(b < 0) b = 0;
  if(r > 255) r = 255;
  if(g > 255) g = 255;
  if(b > 255) b = 255;
  r = parseInt(r).toString(16);
  g = parseInt(g).toString(16);
  b = parseInt(b).toString(16);
  if(r.length == 1) r = "0" + r;
  if(g.length == 1) g = "0" + g;
  if(b.length == 1) b = "0" + b;
  var str = r + g + b;
  return str.toUpperCase();
}

/*看到一个判断长度为1的一个简单的办法*/
.toString(16))).slice(-2)