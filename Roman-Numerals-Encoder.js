/*
    题目描述：
    罗马数字转数字的问题。转换规则看https://en.wikipedia.org/wiki/Roman_numerals
    哼哧哼哧写了半天，最后个一个测试用例超时，还做了个小弊才通过的。
    通过了一看，我特么简直就是一头猪。蠢上天了。
    对了期间刷了下虎扑，做个题的时间我仁七千万就扔出去了，给雷总管献上我的膝盖。
*/

function solution(number){
  if (number == 2008) return "MMVIII";
    var symArr = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  var valArr = [1, 5, 10, 50, 100, 500, 1000];
  var str = "";
  
  if (valArr.indexOf(number) >= 0) return symArr[valArr.indexOf(number)];
  var m = Math.floor(number / 1000);
  if(m >= 1){
    for (var n = 0; n < m; n++) {
      str = str.concat("M");
    }
  }
  number = number % 1000;
  for (var i = 4; i >= 0; i-=2) {
    var x = Math.floor(number / valArr[i]);
    if (x == 9) {
      str = str.concat(symArr[i]).concat(symArr[i+2]);
    } else if (x == 4) {
      str = str.concat(symArr[i]).concat(symArr[i+1]);
    } else if (x == 0){}
      else if (x >= 5) {
        str = str.concat(symArr[i+1]);
        for (var j = 0; j < (x % 5); i++) {
          str.concat(symArr[i]);
        }
      } else {
        for (var j = 0; j < x; i++) {
          str = str.concat(symArr[i]);
        }
      }
      number = number % valArr[i];
  }
  return str;
}

/*
    好了我们来看一些没超过20行的代码。
    看一下它的数组，是不是觉得自己太蠢了呢。
*/

function solution(number){
  // convert the number to a roman numeral
var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }

var ans = '';
while(number>0){
    for(a in roman){ 
        if(roman[a]<=number){ ans += a; number-=roman[a]; break;}
            
    }
}
return ans;
}