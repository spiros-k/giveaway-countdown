
let date = new Date();

let currentMonth = date.getMonth();
let currentDay = date.getDate();
let currentHour = date.getHours();
let currentMinute = date.getMinutes();
let currentSecond = date.getSeconds();

let currentDate = [`${currentMonth}`,  `${currentDay}`, `${currentHour}`,  `${currentMinute}`,  `${currentSecond}`];
let countdownDate = new Date("April 02, 2025 21:00:00");

let countdownMonth = countdownDate.getMonth();
let countdownDay = countdownDate.getDate()
let countdownHour = countdownDate.getHours();
let countdownMinute = countdownDate.getMinutes()
let countdownSecond = countdownDate.getSeconds()

countdownDate = [`${countdownMonth}`, `${countdownDay}`,  `${countdownHour}`,  `${countdownMinute}`,  `${countdownSecond}`];

console.log(currentDate)
console.log(countdownDate)
let output = [];
for(let i = 0; i < currentDate.length; i++){
    output.push(countdownDate[i] - currentDate[i])
    console.log(output)
}


//  1. CORRECT TIME SHOWN
//  2. MONTHS, DAYS... SECONDS text SHOW
//  3. UPDATE EVERY SECOND


document.addEventListener("DOMContentLoaded", () => {
    let time = output.map((item) => {
       
        return (`<div id="countdown-div">
            <h1 id="countdown-number">${item}</h1>
            <p id="countdown-text">Days</p>
            </div>`)
    });
    let timeDiv = time.join("")
    console.log(timeDiv)
    document.getElementById("countdown-section").innerHTML = timeDiv;
})


