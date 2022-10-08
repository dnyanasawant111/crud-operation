function secondheighest(Array){
    let heighest=0;
    let secondheighest=0;
    for(let i=0;i<Array.length;i++){
        if(Array[i]>heighest){
            secondheighest=heighest;
            heighest=Array[i];
        }
        else if(Array[i]>secondheighest && secondheighest!=heighest){
            secondheighest=Array[i];
        }

    }
    return secondheighest;
}
let Array=[1,22,13,42,5,6];
console.log(secondheighest(Array));