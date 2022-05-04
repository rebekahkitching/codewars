function positiveSum(arr) {
    const reduce = (acc,c) => acc + (c > 0 ? c: 0);
    return arr.reduce(reduce,0);
  }