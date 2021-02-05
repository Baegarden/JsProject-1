const clockContainer = document.querySelector(".js-clock")
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amORpm = "AM";
    if(hours > 12){
        amORpm = "PM"
    }
    console.log(hours, minutes);
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}`;
}
function init() { 
    getTime();
    setInterval(getTime, 1000);
}
init();