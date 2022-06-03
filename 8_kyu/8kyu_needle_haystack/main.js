function findNeedle(haystack) {
    for(index = 0;index < haystack.length; index++){
      let element = haystack[index];
      
      if(String(element) === 'needle'){
        return 'found the needle at position ' + haystack.indexOf(element);
      }
    }
  }