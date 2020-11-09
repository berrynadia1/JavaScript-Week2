
// let January = 1
// let Feburary = 2
// let March = 3
// let April = 4
// let May = 5
// let June = 6
// let July = 7
// let August = 8
// let September = 9
// let October = 10
// let November = 11
// let December = 12

// let j1 = "January"
// let f2 = "Feburary"
// let a3 = "March"
// let m4 = "April"
// let m5 = "May"
// let j6 = "June"
// let j7 = "July"
// let a8 = "August"
// let s9 = "September"
// let o10 = "October"
// let n11 = "November"
// let d12 = "December"

// var userInput = prompt("Type here")

// if(userInput === 1 ){
//     console.log("January")
// }




let months = ["January",
"Feburary","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


var userNumber = prompt("Enter a number 1-12")
var userNumberAsNumber = parseInt(userNumber)
// if (userNumber ===)
// console.log(months[userNumber-1]);

if(userNumber <= 12){
    console.log(months[userNumber-1]);
    
}else if (userNumber > 12){
    alert("This is a not a month");
}