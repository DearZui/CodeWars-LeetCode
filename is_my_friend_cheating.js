/*
  A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
  Within that sequence, he chooses two numbers, a and b.
  He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
  Given a number n, could you tell me the numbers he excluded from the sequence?
*/

//This is my solution, looks fine.
/*function removeNb (n) {
  let sum = (1+n)*n/2;
  let result = [];
  for(let i = 0; i < Math.ceil(Math.pow(sum, 0.5)); i++) {
    for(let j = i+1; j < n; j++) {
      if((i*j) === (sum-i-j)) {
        result.push([i, j]);
      }
    }
  }
  
  if(result.length) {
    let reversed_result = [];
    for(let i = 0; i <result.length; i++){
    	reversed_result[i] = result[i].slice().reverse();
    }
    result = result.concat(reversed_result.reverse());
  }
  
  return result;
}*/

//Well, guess what? Timeout! I did expect that coming. I have 2 for().. here afterall.
//It's more like a math problem than a coding test.
  // a * b = S(n) - a - b
  
  // and the sum of all first n natural numbers is
  // S(n) = n * (n + 1) / 2
  
  // so we can refrase the first formula like this:
  // a * b = n * (n + 1) / 2 - a - b
  // a * b + b = n * (n + 1) / 2 - a
  // b * (a + 1) = n * (n + 1) / 2 - a
  // b = (n * (n + 1) / 2 - a) / (a + 1)

//Only a few lines of code now.
function removeNb(n) {
  var results = [];
  for (var a = 1; a <= n; a++) {
    var b = (n * (n + 1) / 2 - a) / (a + 1);
    if (b % 1 === 0 && b <= n) results.push([a, b]);
  }
  return results;
}