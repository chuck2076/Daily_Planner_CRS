//create global variables
let row = document.querySelector (".row");
//let hour = document.querySelector (".hour");
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

let today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//Create Array with time values
const hourPlanner = [{hour: 9, time:"9am"},
            {hour: 10, time:"10am"},
            {hour: 11, time:"11am"},
            {hour: 12, time:"12pm"},
            {hour: 13, time:"1pm"},
            {hour: 14, time:"2pm"},
            {hour: 15, time:"3pm"},
            {hour: 16, time:"4pm"},
            {hour: 17, time:"5pm"},
            ]

//Create Time Row in index
hourPlanner.forEach(currentHour => {
    let hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);

console.log(hourPlanner);

let hourBox = $("<div>")
    .text(`${currentHour.time}`)
    .attr({"class": "col-sm-2"});
console.log(hourBox);
});

let textArea = $("<div>")
.attr({"class": "col-sm-8"});

let textInput = $("<textArea>");
    hourBox.append(textInput);
    textInput.attr(currentHour.hour);

    })
//I'm tired and it's quittin time



//Set textArea to eventListener("onClick", => it's a text box and add text)?
//Set textArea to saveBtn.eventListener("onClick", => it's a text box and add text)?
//Set saveBtn to keep text in text area; use a modification of:
//var highScores= JSON.parse(localStorage.getItem("highScore")) || [];
//let scoreText = resultBox.querySelector(".score-text");

//function savedEvent(){

//var finalEvent = {
//    hourPlanner.append(eventField);
 //    }
       
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