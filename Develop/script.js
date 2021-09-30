//create global variables
let row = document.querySelector (".row");
let hour = document.querySelector (".hour");
let saveBtn = document.querySelector (".saveBtn");
let textArea = document.querySelector ("textArea");
let description = document.querySelector (".description");
let timeBlock = document.querySelector (".time-block");
let past = document.querySelector (".past");
let present = document.querySelector (".present");
let future = document.querySelector (".future");
//let currentDay = $("#currentDay");

//or $(root)?; look at in class materials

//I think description = something to with function <h1 class="display-3">, <p class="lead"> and currentDay

//Set Current Day in Calendar:

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//Set style using document.createElement and .row = (sm-2, sm-8, sm-2)
//$( "#hour" ).clone().appendTo("#row");

var hour = [{num = 9, time ="9am"},
            {num = 10, time ="10am"},
            {num = 11, time ="11am"},
            {num = 12, time ="12pm"},
            {num = 1, time ="1pm"},
            {num = 2, time ="2pm"},
            {num = 3, time ="3pm"},
            {num = 4, time ="4pm"},
            {num = 5, time ="5pm"},
            ]

$.map( arr, function(num, time) {
    return (num.id);
console.log(num);


//Set textArea to eventListener("onClick", => it's a text box and add text)?
//Set textArea to saveBtn.eventListener("onClick", => it's a text box and add text)?
//Set saveBtn to keep text in text area; use a modification of:
//var highScores= JSON.parse(localStorage.getItem("highScore")) || [];
//let scoreText = resultBox.querySelector(".score-text");

//function showResult(){

//    var finalScore = {
 //       initials: initials, 
//        score: userScore,
//       }
       
//    highScores.push(finalScore);
       
       
//    localStorage.setItem("highScore", JSON.stringify(highScores));
    
//    let lastScore = highScores[highScores.length -1];
//    console.log(lastScore);
//    let logInitials = lastScore.initials;
//    let logNumber = lastScore.score;
//    let scoreTag = '<span><p>' + logInitials + '</p> scored <p>' + logNumber +'</p> out of 5';
//    scoreText.innerHTML = scoreTag;
//}

//Set function if hour = before moment(currentTime){
//    then .textArea = gray
//} else if hour = moment(currentTime){
//    then .textArea = red
//} else {
//    .textArea = green
//};