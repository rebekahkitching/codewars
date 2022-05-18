const getAverage = (marks) => {
    const total = marks.reduce((acc,c) => acc + c);
    return Math.floor(total / marks.length);
  }
  
  
  // reduce list of nums into single num via addition
  // divide the sum by num of items in list for average
  // take .floor(), creating floor average 