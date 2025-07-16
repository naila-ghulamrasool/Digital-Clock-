let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


setInterval(()=>{
    let currentTime = new Date();
    hrs.innerHTML = (currentTime.getHours()<10? "00" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10? "00" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10? "00" : "") + currentTime.getSeconds();

},1000)





