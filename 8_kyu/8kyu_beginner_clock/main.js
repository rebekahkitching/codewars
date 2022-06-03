function past(h, m, s){
    let secToMillisec = s * 1000;
    let minToMillisec = m * 60000;
    let hoursToMillisec = h * 3600000;
    
    return secToMillisec + minToMillisec + hoursToMillisec;
  }