const btn=document.getElementById('result');

const Bill=document.getElementById('bill');

const Service=document.getElementById('service');

const People=document.getElementById('people');

const Total=document.getElementById('total');

btn.addEventListener('click',function(){

 const first=Bill.value;
 const second=Service.value;
 const third=People.value;
  
 const sum=Math.floor(first*second)/third;
 Total.value=sum;
 


});


