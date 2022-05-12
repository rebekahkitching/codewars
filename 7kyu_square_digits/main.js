function squareDigits(num){
    let squaredDigits = Math.abs(num).toString().split('');
    let arr = squaredDigits.map((n) => {
      return (parseInt(n)**2).toString()
    })
    return parseInt(arr.join(''));
  }