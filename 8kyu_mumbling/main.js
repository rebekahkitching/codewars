// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


function accum(s) {
    let arr = [];
    for(let index = 0; index < s.length; index++){
      arr.push(format(s[index], index +1));
    }
    return arr.join('-')
  }
  
  function format(s, num){
    let letter = s.toUpperCase();
    
    while(letter.length !== num){
      letter += s.toLowerCase();
    }
    return letter; 
  }