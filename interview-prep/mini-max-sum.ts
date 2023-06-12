/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
    // Write your code here
    arr.sort();
    
    const totalSum: number = arr.reduce(
        (acc: number, val: number) => acc + val, 0);
    const minSum: number = totalSum - arr[arr.length - 1];
    const maxSum: number = totalSum - arr[0];
    
    console.log(minSum + " " + maxSum);
}