
const example1 = new Promise((resolve, reject) => {

let value = 3;

if (value == 3) {

  resolve(3);

} else {

  reject(error);

}

})

.then((value) => {

  console.log(value);

})

.catch((error) => {

  console.log(error);

});

//Exercise 2
function rejectPromise(string){
let error = string
if(string!=="Boo!"){
  return Promise.reject(`The string '${error}' do not match)`)
}else{
   console.log("we want error")
}
}
rejectPromise("Boo")
.catch(err=> console.log("The promise got rejected", err))

//Exercise 3

function makePromiseWithConstructor(itShouldResolve){
return new Promise((resolve,reject)=> {
  if(itShouldResolve =="truthy"){
    resolve("The Promise got resolved")
  } else(itShouldResolve =="falsy")
  {
    reject("The Promise got rejected")
  }
})
}
makePromiseWithConstructor("falsy")
.then((result)=>console.log(result))
.catch((error)=>console.log(error))

//Exercise 4
function simulate(value,delays) {
return new Promise((resolve,reject)=>{

  setTimeout(()=>{
    resolve (`promise is resolved, value is =${value}`)
  },delays)
})
}
simulate(20,5000)
.then((res)=> console.log(res))
