
const arr=[1,5,8,4,6,6,9,7]
function ascending(arr){
    for(let i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i]){
                let  temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp
            }
        }
    }
    console.log(arr);
}
ascending(arr);