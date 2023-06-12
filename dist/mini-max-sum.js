'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let inputLines = [];
let currentLine = 0;
process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});
process.stdin.on('end', function () {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});
function readLine() {
    return inputLines[currentLine++];
}
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
function main() {
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    miniMaxSum(arr);
}
//# sourceMappingURL=mini-max-sum.js.map