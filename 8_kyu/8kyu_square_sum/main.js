const squareSumMapReduce = numbers => numbers
  .map(num => Math.pow(num, 2))
  .reduce(
    (acc, num) => acc + num,
    0
  );


// OR


function squareSum(numbers){
    const squaredNumbers = [];
    for (const num of numbers) {
      squaredNumbers.push(Math.pow(num, 2));
    }
    
    let sum = 0;
    for (const squaredNum of squaredNumbers) {
      sum = sum + squaredNum;
   }
   
   return sum;
  }