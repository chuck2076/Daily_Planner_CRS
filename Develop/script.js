//create global variables
//let row = document.querySelector (".row");
//let hour = document.querySelector (".hour");
//let saveBtn = document.querySelector (".saveBtn");
//let textArea = document.querySelector ("textArea");
//let description = document.querySelector (".description");
//let timeBlock = document.querySelector (".time-block");
//let past = document.querySelector (".past");
//let present = document.querySelector (".present");
//let future = document.querySelector (".future");
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
//let currentHour = (hourPlanner["hour"]);
//console.log(currentHour);
//Create Time Row in index
hourPlanner.forEach(currentHour => {
//    let hourRow = $("<article>").attr({
//        "class": "row row no gutters row hover"
//    });
let hourRow = `<div class = "row" id=${currentHour.hour}>
<div class = "col-2 time-block" >${currentHour.time}</div>
<div class = "col-8 textarea hour"> <textarea></textarea></div>
<div class="saveBtn col-2"></div> 
</div>`
    $(".container").append(hourRow);




console.log(hourRow);

//<div class = "row" id=`${currHour.hour}`>
 //<div class = col-2>${currHour.time}</div>
 //<div class = col-8> <textarea></textarea></div>
 //<div class="saveBtn col-2"></div> 
//</div>

//Add time to hour box area in time row
// hourPlanner.forEach(currentHour => {
// let hourBox = $("<div>")
//     .text(`${currentHour.hour}`)
//     .attr({"class": "col-sm-2 hour"});
// console.log(hourBox);
// });

// hourPlanner.forEach(currHour =>{
//     let hourBox = $("<div>")
//     .text(`${currHour.time}`)
//     .attr({"class": "col-sm-2 hour"});
// console.log(hourBox);
// });

// //Append text area to time row
// let textArea = $("<textArea>")
// .attr({"class": "col-sm-8 textarea"});

// //Create Text Input Area
// let textInput = $("<textArea>");
//     hourBox.append(textInput);
//     textInput.attr("hour");
//    localStorage.setItem("textInput", textInput); 

//Create if else for colors of text box

    // if (currentHour.hour < moment()) {
    //     textArea.attr({"class": "past"})
    // }else if (currentHour.hour === moment()){
    //     textArea.attr({"class": "present"})
    // }else {
    //     textArea.attr({"class": "future"})
    // }

//Create saveBtn
let saveBtn =$("<button>")
    .attr({"class":"col-sm-2 saveBtn"})
//Add icon
$(function () {
    $("<button>").button({
            icons: { primary: "fa-solid fa-folder-plus" }
        });
    });
});

//Need OnClick Event here
saveBtn.on("click", function(event){
    event.preventDefault();
    localStorage.setItem("hourPlanner", JSON.stringify(hourPlanner));
});
    //return Response.json()?




//Set textArea to eventListener("onClick", => it's a text box and add text)?
//Set textArea to saveBtn.eventListener("onClick", => it's a text box and add text)?
//Set saveBtn to keep text in text area; use a modification of:
//var highScores= JSON.parse(localStorage.getItem("highScore")) || [];
//let scoreText = resultBox.querySelector(".score-text");

//localStorage.setItem("hourPlanner", JSON.stringify(hourPlanner)); 
//function savedEvent() {
//    localStorage.setItem("hourPlanner", JSON.stringify(hourPlanner));
 

function displayEvent() {
    hourPlanner.array.forEach(currentHour => {
        $(`${currentHour.time}`).val(textInput)
    });
    
}

//let finalEvent = JSON.parse(localStorage.getItem("textInput"))
    
    
       
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