/*
    codewars上的题果然一级一登天，今天做了一道4级的题花了我整整一个晚上。
    题目描述：
    By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

       3
      7 4
     2 4 6
    8 5 9 3

    That is, 3 + 7 + 4 + 9 = 23.
    求一个pyramid的和最大串。
    一开始想得非常简单，从最上面开始，选它下面两个数中的大数加上去就行了。
    和expected不一样，看了好久才发现题目理解错了。
    刚刚的想法下来的和并不一定是最大的，比如       
       3
      7 4
     2 4 9
    8 5 9 9 变成这样，按照刚才的想法还是3 + 7 + 4 + 9 = 23，然而正确答案却是3 + 4 + 9 + 9 = 25。
    然后我就想我要GG了，这要怎么算？有2^n种可能，难道都放到数组然后sort么。别逗了。
    既然从上面来不行，那就女上啊不是，从下面来吧。
    还是第一个例子，第三行的2如果在要求的这个串里，那它下面的数字肯定选择8，我们把8加到2上，同理 4，6
    变成
       3
      7 4
    10 13 15
    继续
      3
    20 19
    一目了然。
    我就问你一句，吊不吊？
    当然这么吊的方法不是我想到的。
*/

function longestSlideDown (pyramid) {
  for(var i = pyramid.length - 1; i > 0; i--) {
    for(var j = 0; j < i + 1 ; j++){
      pyramid[i-1][j] += (pyramid[i][j] > pyramid[i][j+1]) ? pyramid[i][j] : pyramid[i][j+1];
    }
  }
  return pyramid[0][0];
}