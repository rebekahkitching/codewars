function removeChar(str){
    str = (str.slice(1));
    str = (str.slice(0, str.length-1));
    return str;
  };
  

// prettier version

function removeChar(str){
  return str.slice(1, str.length - 1)
};