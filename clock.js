// current date 
// current date in  h
// current date in  mt
// current date in  sc
const timeSecond       = document.querySelector("#second") ;
const timeMinute       = document.querySelector("#minute") ;
const timeHour         = document.querySelector("#hour") ;
function setClock(){
    const currentDate      = new Date();
    const currentSecond    = currentDate.getSeconds();
    const currentMinute    = currentDate.getMinutes();
    const currentHour      = currentDate.getHours();
    
    const secondRatio      = currentSecond /60 ;
    const minuteRatio      = (secondRatio+currentMinute)/60 ;
    const hourRatio        = (minuteRatio+currentHour)/12 ;
    time(timeSecond, secondRatio)
    time(timeMinute, minuteRatio )
    time(timeHour, hourRatio )
}

function time(ane, secondRatio){
    ane.style.setProperty("--rotation", secondRatio*360);
    
}
function time(mt, minuteRatio){
    mt.style.setProperty("--rotation", minuteRatio*360);
}
function time(hr, hourRatio){
    hr.style.setProperty("--rotation", hourRatio*360);
}
setInterval(setClock);
// https://www.youtube.com/watch?v=4pHk5NYJXZ0







    
// console.log(currentHour);
// console.log(currentMinute);
// console.log(currentSecond);
