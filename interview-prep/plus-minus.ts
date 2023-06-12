function plusMinus(arr: number[]) {
  // Write your code here
  const positives: number[] = [];
  const negatives: number[] = [];
  const zeroes: number[] = [];
  arr.forEach((num: number) => {
    if (num > 0) {
      positives.push(num);
    } else if (num < 0) {
      negatives.push(num);
    } else {
      zeroes.push(num);
    }
  });
  const positiveRatio: number = positives.length / arr.length;
  console.log(+positiveRatio.toFixed(6));
  const negativeRatio: number = negatives.length / arr.length;
  console.log(+negativeRatio.toFixed(6));
  const zeroRatio: number = zeroes.length / arr.length;
  console.log(+zeroRatio.toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
