
let date = new Date();
const timeArray = ["Hours", "Minutes", "Seconds"];

// let currentMonth = date.getMonth();
//let currentDay = date.getDate();
let currentHour = date.getHours();
let currentMinute = date.getMinutes();
let currentSecond = date.getSeconds();

let currentDate = [`${currentHour}`,  `${currentMinute}`,  `${currentSecond}`];
let countdownDate = new Date("June 02, 2024 23:59:59");

// TRIED USING GETTIME()
// let currentTime = date.getTime();
// let countdownTime = countdownDate.getTime()
// console.log(currentTime, countdownTime)
// console.log(countdownTime - currentTime)

// let countdownMonth = countdownDate.getMonth();
//let countdownDay = countdownDate.getDate()
let countdownHour = countdownDate.getHours();
let countdownMinute = countdownDate.getMinutes()
let countdownSecond = countdownDate.getSeconds()

countdownDate = [`${countdownHour}`,  `${countdownMinute}`,  `${countdownSecond}`];

console.log(currentDate)
console.log(countdownDate)
let output = [];
for(let i = 0; i < currentDate.length; i++){
    output.push(countdownDate[i] - currentDate[i])
    console.log(output)
}
let countdownMonth
let monthOfYear = date.getMonth() + 1;
console.log(monthOfYear)
let monthNum = date.getDate();
console.log(monthNum)
if(monthOfYear === 1){
    countdownMonth = 31 - monthNum;
} else if(monthOfYear === 2){
    countdownMonth = 28 - monthNum;
} else if(monthOfYear === 3){
    countdownMonth = 31 - monthNum;
} else if(monthOfYear === 4){

}


//  1. CORRECT TIME SHOWN
//  2. MONTHS, DAYS... SECONDS text SHOW
//  3. UPDATE EVERY SECOND


document.addEventListener("DOMContentLoaded", () => {
    
    let time = output.map((item) => {
       
        return (`<div id="countdown-div">
            <h1 id="countdown-number">${item}</h1>
            <p class="countdown-text"></p>
            </div>`)
    });
    let timeDiv = time.join("")
    console.log(timeDiv)
    document.getElementById("countdown-section").innerHTML = timeDiv;
    for(let i = 0; i < timeArray.length; i++){
        document.getElementsByClassName("countdown-text")[i].textContent = timeArray[i];
    }
})


