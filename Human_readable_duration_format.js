/*
    题目描述：
    输入秒数，输出多少年多少天多少分多少秒。
    题目其实不是很难。我的办法也比较笨
*/

function formatDuration (seconds) {
  if(seconds == 0) { return "now"};
  var year = Math.floor(seconds / 31536000), yearyu = seconds%31536000;
  var day = Math.floor(yearyu / 86400), dayyu = yearyu%86400;
  var hour = Math.floor(dayyu / 3600), houryu = dayyu%3600;
  var minute = Math.floor(houryu / 60), minuteyu = houryu%60;
  var second = Math.floor(minuteyu);
  year = (year == 0) ? "" : ((year == 1) ? "1 year" : year+" years");
  day = (day == 0) ? "" : ((day == 1) ? "1 day" : day+" days");
  hour = (hour == 0) ? "" : ((hour == 1) ? "1 hour" : hour+" hours");
  minute = (minute == 0) ? "" : ((minute == 1) ? "1 minute" : minute+" minutes");
  second = (second == 0) ? "" : ((second == 1) ? "1 second" : second+" seconds");
  var arr = [];
  if(year != "") arr.push(year);
  if(day != "") arr.push(day);
  if(hour != "") arr.push(hour);
  if(minute != "") arr.push(minute);
  if(second != "") arr.push(second);
  if(arr.length == 5){
    arr[1] = ", " + arr[1];
    arr[2] = ", " + arr[2];
    arr[3] = ", " + arr[3];
    arr[4] = " and " + arr[4];
  }else if(arr.length == 4){
    arr[1] = ", " + arr[1];
    arr[2] = ", " + arr[2];
    arr[3] = " and " + arr[3];
  }else if(arr.length == 3) {
    arr[1] = ", " + arr[1];
    arr[2] = " and " + arr[2];
  }else if(arr.length == 2){
    arr[1] = " and " + arr[1];
  }
  var str = "";
  for(var i = 0; i < arr.length; i++){
    str += arr[i];
  }
  return str;
}