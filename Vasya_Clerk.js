/*
    一个找钱的题目，一队人排队买票，每个人身上只有一张25或50或100的钞票，每张票25.
    卖票的人一开始一毛钱都没有。一队人如果能找得开钱，就返回YES，否则就返回NO
    像这样[25,25,50] => YES  [25,100] => NO
    好了有思路了，25的钞票放一个数组，50的钞票放一个数组，100的顺手扔了（好心疼）
    来买票了买票了，
        ——“给你25”——“给你票，滚吧”
        ——“给你50”——“我看一下25的数组，好有，找你25，滚吧”
                  ——“我看一下25的数组，没钱找，NO”
        ——“给你100”——“我肯定要找一张25给你对吧，先看看25的数组，好有，再看看50的数组，好有，给你一张25一张50滚吧”
                  ——“……再看看50的数组，没有？看看25的数组，有没有三张，有？给你三张25滚吧；没有？NO”
    终于把这群人卖光了，YES 
*/

function tickets(peopleInLine){
  var arr25 = [];
  var arr50 = [];
  var x = 0;
  for(var i = 0;  i < peopleInLine.length; i++){
    if(peopleInLine[i] == 25){
      arr25.push(25);
    } else if(peopleInLine[i] == 50){
      x = arr25.pop();
      if(x == undefined) return "NO";
      arr50.push(50);
    } else if(peopleInLine[i] == 100){
      if(arr50.length == 0){
        if(arr25.length < 3){
          return "NO";
        } else {
          arr25.splice(0, 3);
        }
      } else {
        arr50.pop();
        x = arr25.pop();
        if(x == undefined) return "NO";
      }
    }
  }
  return "YES";
}

/*再看看别人的答案，没什么clever的。那就这样吧。*/