/*
    题目描述：不是很难，一个后序表达式的问题。
    5 1 2 + 4 * + 3 -  ==>  5 + ((1 + 2) * 4) - 3
    把数组一个个push到另一个数组num，遇到算数符号就pop出两个数出来，计算出来的数在push到num中。
    有个小小的注意点，比如：遇到+号，push出的第一个数为b，第二个数为a，应该计算 a + b,而不是 b + a。
    
    如果没有算数符号就输出数组最后一个数字。
*/

function calc(expr) {
  var arr = expr.split(" ");
  var num = [];
  var tmp;
  if (expr == "") return 0;
  for (let i = 0; i < arr.length; i++){
    if (!isNaN(arr[i])) {
      num.push(arr[i] - 0);
    } else {
      var b = num.pop();
      var a = num.pop();
      num.push(ch(arr[i], a, b));
    }
  }
  return num[num.length-1];
}

function ch(str, a, b) {
  if (str === "+") return a + b;
  if (str === "-") return a - b;
  if (str === "*") return a * b;
  if (str === "/") return a / b;
}