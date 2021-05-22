// Code your solution in this file!
// Code your solution in this file!



function distanceFromHqInBlocks(blocks) {
    const hq = 42;
    if (blocks >= 42){
        return blocks - hq;
    } else {
       return hq - blocks;  
    }  
}

function distanceFromHqInFeet(blocks) {
    const hq = 42;
    const distance = 264;
    if (blocks >= 42){
        return (blocks - hq) * distance;
    } else {
       return (hq - blocks) * distance;  
    }  
}


function distanceTravelledInFeet(block1, block2) {
    
    const distance = 264;
    if (block2 >= block1){
        return (block2 - block1) * distance;
    } else {
       return (block1 - block2) * distance;  
    }  
}

function calculatesFarePrice(start, destination) {
    const distance = 264;
    const rate = 0.02;
    const flatRate = 25;
    let travel = Math.abs((destination - start) * distance);

    if (travel < 400){
        return 0;
    } else if (travel < 2000){
       return (travel - 400) * rate;  
    } else if (travel < 2500){
        return flatRate;
    } else if (travel >= 2500){
        return `cannot travel that far`;
    }

}
