function sockMerchant(n , ar){
    ar.sort();
    let i = 0;
    let count = 0;
    while(i < n){
        if(ar[i] == ar[i + 1]){
            i += 2;
            count++;
        }else{
            i++;
        }
    }
    return count;
}

const numberArray = [13, 11, 20, 11, 14, 13, 15, 16, 20, 10, 15, 10];
console.log(sockMerchant(numberArray.length, numberArray));