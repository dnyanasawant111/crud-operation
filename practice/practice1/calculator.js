  let btn=document.querySelectorAll("button");
const screen =document.getElementById("screen")

  let screenValue=""
for( let elements of btn){
elements.addEventListener('click',function(event){
  let btntext=event.target.innerText;
 
    if(btntext=="="){
      screen.value=eval(screenValue);

   }
   else if(btntext=="c"){
     screenValue="";
      screen.value=screenValue;
      
   }
   else{
      screenValue +=btntext;
screen.value=screenValue;
   }
})
  
};
