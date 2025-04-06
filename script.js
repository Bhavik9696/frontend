const clock=document.querySelector("#clock");

setInterval(()=>{
  const time=new Date();
  timeinformate=time.toLocaleTimeString()
  clock.innerHTML=`${timeinformate}`
},1000)