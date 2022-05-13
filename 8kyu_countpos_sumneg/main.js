function countPositivesSumNegatives(inputs) {
    if (inputs === null || inputs.length === 0) {
      return [];
    }
    
    let countOfPositiveNumbers = 0;
    let sumOfNegativeNumbers = 0;
    
    for (const input of inputs) {
      if (input > 0) {
        countOfPositiveNumbers = countOfPositiveNumbers + 1;
      }
      if (input < 0) {
        sumOfNegativeNumbers = sumOfNegativeNumbers + input;
      }
    }
    
    return [countOfPositiveNumbers, sumOfNegativeNumbers];
  }