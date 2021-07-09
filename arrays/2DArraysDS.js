/*
* Problem description: https://bit.ly/3hUpDjA
*/

function hourglassSum(arr){
    let maxValue = -Infinity;
    for(let y = 0; y < 4; y++){
        for(let x = 0; x < 4; x++){
            let value = arr[x][y] + arr[x][y + 1] + arr[x][y + 2] + arr[x + 1][y + 1] + arr[x + 2][y] + arr[x + 2][y + 1] + arr[x + 2][y + 2];
            maxValue < value ? maxValue = value : " ";
        }
    }
    return maxValue;
}

const array2D = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
  ];

  console.log("Max hourglass sum value: " + hourglassSum(array2D));