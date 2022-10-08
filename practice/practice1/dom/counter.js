const heading=document.getElementById("heading");

const increment=document.getElementById("increment");
const decrement=document.getElementById("decrement");
const multi=document.getElementById("multi");
const divide=document.getElementById("divide");

increment.addEventListener('click',function(){
  const current=heading.innerHTML;

  heading.textContent=Number(current)+1;

})

decrement.addEventListener('click',function(){
  const current=heading.innerHTML;

  heading.textContent=Number(current)-1;

})
multi.addEventListener('click',function(){
  const current=heading.innerHTML;

  heading.textContent=Number(current)*2;

})
divide.addEventListener('click',function(){
  const current=heading.innerHTML;

  heading.textContent=Number(current)/5;

})
  
  
  
  
  
  
