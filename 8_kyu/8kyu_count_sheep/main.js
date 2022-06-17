// If you can't sleep, just count sheep!!

// Task:

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


var countSheep = function (num){
    let result = '';
    
    for(index = 1;index <= num; index++) {
      result += index.toString() + ' sheep...';
    }
    return result; 
  }
  
  