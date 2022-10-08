
function foo(arr){
    let obj={};
    for(let i=0;i<arr.length;i++){
      if(obj[arr[i]]){
        let a=obj[arr[i]];
        a=a+1;
        obj[arr[i]]=a;
      }
      else{
        obj[arr[i]]=1;
      }
    }
    return obj;
  }
  console.log(foo([1,1,1,2,2,3]));