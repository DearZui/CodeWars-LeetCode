/*
    题目描述：
    It's Christmas! You had to wait the whole year for this moment. You can already see all the presents under the Christmas tree. But you have to wait for the next morning in order to unwrap them. You really want to know, what's inside those boxes. But as a clever child, you can do your assumptions already.

    You know, you were a good child this year. So you may assume, that you'll only get things from your wishlist. You see those presents, you can lift them and you can shake them a bit. Now you can make you assumptions about what you'll get.

    Your Task

    You will be given a wishlist (array), containing all possible items. Each item is in the format: {name: "toy car", size: "medium", clatters: "a bit", weight: "medium"} (Ruby version has an analog hash structure, see example below)

    You also get a list of presents (array), you see under the christmas tree, which have the following format each: {size: "small", clatters: "no", weight: "light"}

    Your task is to create a list of all possible presents you might get.
    
    有点长啊，概括一下，就是猜一下没拆封的圣诞礼物是自己的礼物清单上的哪个礼物。
    感觉很简单，两个循环就可以了。隐约感觉到肯定有更好的解法。
    这里有个小插曲，console里报错Uncaught ReferenceError: Invalid left-hand side in assignment，一般都是给不能修改的东西赋值了，很大可能就是 == 写成 = 了。
    最后删除一下重复的元素。
*/

function guessGifts(wishlist, presents) {
  var w = wishlist;
  var p = presents;
  var arr = [];
  for(var i = 0; i < p.length; i++){
    for(var j = 0; j < w.length; j++) {
      if(w[j].size == p[i].size && w[j].clatters == p[i].clatters && w[j].weight == p[i].weight) {
        arr.push(w[j].name);
      }
    }
  }
  return deleteRepeat(arr);
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

/*
    看一下果然是有的。一个filter一个some就行了。惭愧的是我到现在才知道有这两个函数，不知道基础怎么打的。
    filter是返回所有callback为true的元素，而some是只要有返回true的就返回true，这样就省略了删除重复的步骤。
    最后用个map把名字取出来就行了。
*/

function guessGifts(wishlist, presents) {
  return wishlist.filter(function(x){
    return presents.some(function(y){
      return x.size == y.size && x.clatters == y.clatters && x.weight == y.weight;
    });
  }).map(function(x){ return x.name; });
}