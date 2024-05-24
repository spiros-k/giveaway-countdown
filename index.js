
let date = new Date();
const timeArray = ["Days", "Hours", "Minutes", "Seconds"];

let currentHour = date.getHours();
let currentMinute = date.getMinutes();
let currentSecond = date.getSeconds();

let currentDate = [currentHour,  currentMinute,  currentSecond]; 
let countdownDate = new Date("June 02, 2024 23:59:59");

let countdownHour = countdownDate.getHours();
let countdownMinute = countdownDate.getMinutes();
let countdownSecond = countdownDate.getSeconds();

countdownDate = [countdownHour, countdownMinute, countdownSecond]; 

// CREATE AN ARRAY WITH THE NUMBERS TO BE SHOWN ON SCREEN
let output = [];
for(let i = 0; i < currentDate.length; i++){
    output.push(countdownDate[i] - currentDate[i])
    console.log(output)
}

// CHECK WHAT THE CURRENT MONTH IS AND DEPENDING ON THE DATE COUNTS THE REMAINING DAYS FOR THIS MONTH TO PASS
let countdownDay
let monthOfYear = date.getMonth() + 1;
console.log(monthOfYear)
let monthNum = date.getDate();
console.log(monthNum)
if(monthOfYear === 1){
    countdownDay = 31 - monthNum;
} else if(monthOfYear === 2){
    countdownDay = 28 - monthNum;
} else if(monthOfYear === 3){
    countdownDay = 31 - monthNum;
} else if(monthOfYear === 4){
    countdownDay = 30 - monthNum;
}else if(monthOfYear === 5){
    countdownDay = 31 - monthNum;
} else if(monthOfYear === 6){
    countdownDay = 30 - monthNum;
} else if(monthOfYear === 7){
    countdownDay = 31 - monthNum;
} else if(monthOfYear === 8){
    countdownDay = 31 - monthNum;
}else if(monthOfYear === 9){
    countdownDay = 30 - monthNum;
} else if(monthOfYear === 10){
    countdownDay = 31 - monthNum;
} else if(monthOfYear === 11){
    countdownDay = 30 - monthNum;
} else if(monthOfYear === 12){
    countdownDay = 31 - monthNum;
}else {
    console.log("Something Went Wrong / No such a month")
}

// GET REMAINING DAYS
countdownDay = countdownDay + (new Date("June 02, 2024 23:59:59").getDate());
output.unshift(countdownDay)


// WHAT TO SHOW WHEN THE PAGE LOADS
document.addEventListener("DOMContentLoaded", () => {
    
    for(let i = 0; i < output.length; i++){                                                        // FOR EACH ITEM A FUNC RUNS AND CREATES A NEW DIV
        document.querySelectorAll(".countdown-number")[i].innerHTML = output[i];
    }
        // return (`<div id="countdown-div">
        //     <h1>${item}</h1>
        //     <p class="countdown-text"></p>
        //     </div>`)
    
    // let timeDiv = time.join("")                                                              // JOIN THE WHOLE HTML THAT CREATED ABOVE WITH SPACE
    // document.getElementById("countdown-section").innerHTML = timeDiv;                        // SHOW THAT HTML
    for(let i = 0; i < timeArray.length; i++){                                               
        document.getElementsByClassName("countdown-text")[i].textContent = timeArray[i];     // SHOW THE NAMES (DAYS, HOURS..) REMAINING
    }
})


// COUNTDOWN EVERY SECOND WITHOUT THE USER RELOADING THE PAGE
var x = window.setInterval(function() {
    
    showOnScreen()

    date = new Date();
    sec = countdownSecond - date.getSeconds();
    hour = countdownHour - date.getHours();

    // STOP THE COUNTDOWN
    if(countdownDay === 0){
        clearInterval(x)
    }

    // DECREASE BY ONE DAY
    if(hour === 0){
        output[0] -= 1; 
        console.log(output)
        document.getElementById("countdown-days").textContent = output[0];
    }
}, 1000)

function showOnScreen() {
    date = new Date();
    let hour = countdownHour - date.getHours();
    let min = countdownMinute - date.getMinutes();
    let sec = countdownSecond - date.getSeconds();

    console.log(hour, min, sec)

    document.getElementById("countdown-hours").textContent = hour;
    document.getElementById("countdown-minutes").textContent = min;
    document.getElementById("countdown-seconds").textContent = sec;
}


// 2. WHEN THE COUNTDOWN STOPS SHOW SOMETHING 