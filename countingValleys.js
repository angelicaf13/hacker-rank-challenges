function countingValleysTwo(steps, path){
    let level = 0;
    let valleyCount = 0;
    for(let i = 0; i < steps; i++){
        if(path[i] == 'D'){
            level--;
        }else{
            level++;
            if(level == 0){
                valleyCount++;
            }
        }
    }
    return valleyCount;
}

function countingValleys(steps, path){
    let level = 0;
    let valleyS = 0;
    let valleyE = 0;
    for(let i = 0; i < steps; i++){
        
        if(path[i] == 'D'){
            level--;
            if(level == -1){
                valleyS++;
            }
        }else{ //path[i] = 'U'
            level++;
            if(level == 0 && valleyS == valleyE + 1){
                valleyE++;
            }
        }
        console.log("[" + i + "] Level: " + level + " VS: " + valleyS + " VE: " + valleyE);
    }

    if(valleyE == valleyS){
        return valleyE;
    }else{
        return valleyS - 1;
    }
}

const path = "DUDU";
console.log(countingValleys(path.length, path));