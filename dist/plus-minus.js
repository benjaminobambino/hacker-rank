function plusMinus(arr) {
    // Write your code here
    const positives = [];
    const negatives = [];
    const zeroes = [];
    arr.forEach((num) => {
        if (num > 0) {
            positives.push(num);
        }
        else if (num < 0) {
            negatives.push(num);
        }
        else {
            zeroes.push(num);
        }
    });
    const positiveRatio = positives.length / arr.length;
    console.log(+positiveRatio.toFixed(6));
    const negativeRatio = negatives.length / arr.length;
    console.log(+negativeRatio.toFixed(6));
    const zeroRatio = zeroes.length / arr.length;
    console.log(+zeroRatio.toFixed(6));
}
plusMinus([-4, 3, -9, 0, 4, 1]);
//# sourceMappingURL=plus-minus.js.map