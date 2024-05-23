
let date = new Date();
const timeArray = ["Days", "Hours", "Minutes", "Seconds"];


let currentHour = date.getHours();
let currentMinute = date.getMinutes();
let currentSecond = date.getSeconds();

let currentDate = [`${currentHour}`,  `${currentMinute}`,  `${currentSecond}`];
let countdownDate = new Date("June 02, 2024 23:59:59");


let countdownHour = countdownDate.getHours();
let countdownMinute = countdownDate.getMinutes();
let countdownSecond = countdownDate.getSeconds();

countdownDate = [`${countdownHour}`,  `${countdownMinute}`,  `${countdownSecond}`];


let output = [];
for(let i = 0; i < currentDate.length; i++){
    output.push(countdownDate[i] - currentDate[i])
    console.log(output)
}

// CHECK WHAT THE CURRENT MONTH IS AND DEPENDING ON THE DATE
// -COUNTS THE REMAINING DAYS FOR THIS MONTH TO PASS
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
    countdownMonth = 30 - monthNum;
}else if(monthOfYear === 5){
    countdownMonth = 31 - monthNum;
} else if(monthOfYear === 6){
    countdownMonth = 30 - monthNum;
} else if(monthOfYear === 7){
    countdownMonth = 31 - monthNum;
} else if(monthOfYear === 8){
    countdownMonth = 31 - monthNum;
}else if(monthOfYear === 9){
    countdownMonth = 30 - monthNum;
} else if(monthOfYear === 10){
    countdownMonth = 31 - monthNum;
} else if(monthOfYear === 11){
    countdownMonth = 30 - monthNum;
} else if(monthOfYear === 12){
    countdownMonth = 31 - monthNum;
}else {
    console.log("Something Went Wrong / No such a month")
}

countdownMonth = countdownMonth + (new Date("June 02, 2024 23:59:59").getDate());
console.log("Hey")
console.log(countdownMonth)

output.unshift(countdownMonth)
console.log(output)

// WHAT TO SHOW WHEN THE PAGE LOADS
document.addEventListener("DOMContentLoaded", () => {
    
    let time = output.map((item) => {                                    // FOR EACH ITEM A FUNC RUNS AND CREATES A NEW DIV
       
        return (`<div id="countdown-div">
            <h1 id="countdown-number">${item}</h1>
            <p class="countdown-text"></p>
            </div>`)
    });
    let timeDiv = time.join("")                                          // JOIN THE WHOLE HTML THAT CREATED ABOVE WITH SPACE
    document.getElementById("countdown-section").innerHTML = timeDiv;    //SHOW THAT HTML
    for(let i = 0; i < timeArray.length; i++){                           //SHOW THE NAMES (DAYS, HOURS..) REMAINING
        document.getElementsByClassName("countdown-text")[i].textContent = timeArray[i];
    }
})

// 1. UPDATE EVERY SECOND WITHOUT THE USER RELOADING THE PAGE
// 2. WHEN THE COUNTDOWN ZEROS SHOULD SHOW SOMETHING AND STOP THE COUNTDOWN