function jumpingOnClouds(c){
    let jumps = 0;
    let i = 0;
    while(i < c.length - 1){
        if(c[i + 2] == 0){
            i += 2;
        }else{
            i++;
        }
        jumps++;
        console.log("[" + i + "] " + " Jumps: " + jumps);
    }
    return jumps;
}

function jumpingOnClouds2(c){
    let jumps = 0;
    for(let i = 0; i < c.length - 1; i += 2, jumps++){
        c[i] == 1 ? i-- : " ";
    }
    return jumps;
}

const clouds = [0, 0, 0, 0, 1, 0]; //3
const clouds2 = [0, 0, 1, 0, 0, 1, 0]; //4

console.log(jumpingOnClouds2(clouds));