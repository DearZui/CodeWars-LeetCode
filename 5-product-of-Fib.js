/*
  Given a number, judge if the number is the product of two continuous Fib 
  numbers. If true, return the two numbers, if not, it depends agains.
  Looks complex right? You have to get an Array of Fib numbers, when does this
  array ends? 
*/

let F = [];
F[0] = 0, F[1] = 1;

function getMiddleNum(prod) {
  let middle_num = Math.ceil(Math.sqrt(prod));
  return middle_num;
}

function getFib(prod) {
  let middle_num = getMiddleNum(prod);
  let n = 0;
  while(F[n] < middle_num) {
    F[n+2] = F[n] + F[n+1];
    n++;
  }
}

function initF() {
  F = [];
  F[0] = 0, F[1] = 1;
}

function productFib(prod){
  initF();
  let result = [];
  getFib(prod);
  let len = F.length;
  if(F[len-2]*F[len-3] === prod) {
    result[0] = F[len-3];
    result[1] = F[len-2];
    result[2] = true;
  } else if(F[len-2]*F[len-3] > prod) {
    result[0] = F[len-3];
    result[1] = F[len-2];
    result[2] = false;
  } else {
    result[0] = F[len-2];
    result[1] = F[len-1];
    result[2] = false;
  }
  return result;
}

/*
  My solution is quiet complex, then I thougth, we will loop anyway, why don't 
  we just set the appropriate loop condition?
*/
function productFib(prod){
  var n = 0;
  var nPlus = 1;  
  while(n*nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n*nPlus===prod];
}