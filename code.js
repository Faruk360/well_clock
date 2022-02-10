
// const second       = document.querySelector("#secund") ;
// const minute       = document.querySelector("#minute") ;
// const hour         = document.querySelector("#hour") ;
// function setClock(){
//     const currentDate      = new Date();
//     const currentSecond    = currentDate.getSeconds();
//     const currentMinute    = currentDate.getMinutes();
//     const currentHour      = currentDate.getHours();
    
//     const secondRatio      = currentSecond /60 ;
//     const minuteRatio      = (secondRatio+currentMinute)/60 ;
//     const hourRatio        = (minuteRatio+currentHour)/12 ;
//     time(second, secondRatio)
//     time(minute, minuteRatio )
//     time(hour, hourRatio )
// }

// function time(ane, secondRatio){
//     ane.style.setProperty("--rotation", secondRatio*360);
    
// }
// function time(mt, minuteRatio){
//     mt.style.setProperty("--rotation", minuteRatio*360);
// }
// function time(hr, hourRatio){
//     hr.style.setProperty("--rotation", hourRatio*360);
// }
// setInterval(setClock);


const second       = document.querySelector("#secund") ;
const minute       = document.querySelector("#minute") ;
const hour         = document.querySelector("#hour") ;

 function setTime(){
    const currentTime      = new Date();
    const currentSecond    = currentTime.getSeconds();
    const currentMinute    = currentTime.getMinutes();
    const currentHour    = currentTime.getHours();
    const secondRatio    = currentSecond / 60;
    const minuteRatio    = (secondRatio+currentMinute)/60;
    const hourRatio      = (minuteRatio+currentHour)/12;
    time(second,secondRatio);
    time(minute,minuteRatio);
    time(hour,hourRatio);
 }

 function time(second, secondRatio){
    second.style.setProperty("--rotation", secondRatio * 360);
    
 }
 
 function time(hour, hourRatio){
    hour.style.setProperty("--rotation", hourRatio * 360);
    
 }
 function time(minute, minuteRatio){
    minute.style.setProperty("--rotation", minuteRatio* 360);
    
 }

//  function time(ane, secondRatio){
//      ane.style.setProperty("--rotation", secondRatio*360);
    
//  }
setInterval(setTime);