var timeblockEl = $(".container");
var currentExactTime = moment().format("L");

$("#currentDay").text(currentExactTime);

var startDay = 9
var endDay = 17
var currentTime = moment().format("H");
console.log(currentTime)

for(i = startDay; i<=endDay; i++){
    var newRow = $("<div>")
    newRow.attr("class", "row")

    var newP = $("<p>");
    newP.attr("class", "col-1")
    newP.text(i);
    newRow.append(newP)

    var newTextArea = $("<textarea>");
    if(i < currentTime){
        newTextArea.attr("class", "col-10 past")
    } else if(i== currentTime){
        newTextArea.attr("class", "col-10 present")
    } else {
        newTextArea.attr("class", "col-10 future")
    }
    var info = localStorage.getItem(i)
    newTextArea.text(info)
    newRow.append(newTextArea);

    var newBtn = $("<button>");
    newBtn.text("Save");
    newBtn.attr("class", "col-1 saveBtn")
    newBtn.attr("id", i)
    // newBtn.innerHTML = '<i class="far fa-calendar-check"></i>';
    newRow.append(newBtn)
    
    // <i class="far fa-calendar-check"></i>
    
    timeblockEl.append(newRow)
}

function saveInfo() {
    var newKey = $(this).attr("id")
    var newVal = $(this).prev().val()
    localStorage.setItem(newKey, newVal)
}

$(document).on("click", "button", saveInfo)