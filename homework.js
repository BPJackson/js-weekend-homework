//logAll//
var i = 0
var logAll = function(arr){
while (i<arr.length){
  console.log(arr[i]);
  i++;
}}

logAll([1,2,3,4,5]);

//Sum//
var sum = function(arr) {
  var    i = 0,
    result = 0;

  while(i<arr.length) {
    result = result + arr[i];
    console.log(result);
    i++;
  }
return result;
}
sum([1,2,3]);

//Subtract//
var avg = function(arr) {
  var    i = 0,
    result = 0;

  while(i<arr.length) {
    result = result - arr[i];
    i++;
  }
return result;
}
avg([10,20,30]);

//Largest//
var largest = function(arr) {
 return Math.max.apply ( 0, arr);
};
largest([1,2,3,4,1,6]);

// //Smallest//
var smallest = function(arr) {
 return Math.min.apply ( 0, arr);
};
smallest([1,2,3,4,1,6]);

// //Average//
var avg = function(arr) {
  var    i = 0,
    result = 0;

  while(i<arr.length) {
    result = result + arr[i];
    i++;
  }
return result/arr.length;
}
avg([10,20,30]);




//Next in sequence//
var comp = function(arr) {
  var    i = .5,
    result = .5;

  while(i<arr.length) {
    result = result * 2;
    console.log(result);
    i++;
  }
return result;
}

comp([1,2,4,8,16,32]);


//Fib//
function fibonacci(n){
  var num = [0, 1];

  if (n <= 2) return 1;

  for (var i = 2; i <=n; i++){
   num[i] = num[i-1]+num[i-2];
  }

 console.log(num[n-1]);
 console.log(num[n-2]);
}

 fibonacci(100);
