/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function miniMaxSum(arr) {
    // Write your code here
    arr.sort();
    const totalSum = arr.reduce((acc, val) => acc + val, 0);
    const minSum = totalSum - arr[arr.length - 1];
    const maxSum = totalSum - arr[0];
    console.log(minSum + " " + maxSum);
}
//# sourceMappingURL=mini-max-sum.js.map