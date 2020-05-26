$(document).ready(() => {
//*variables
var currentDateEl = $("#currentDay")

//*current date
var currentDate = moment().format("dddd - MMMM DD, YYYY");
currentDateEl.html(currentDate);


//*set into local storage
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var hrValue = $(this).siblings(".input").val()
    var hrKey = $(this).siblings(".hour").text()
    localStorage.setItem(hrKey, hrValue)
})

//*render back into page
$(".hour-8 .input").val(localStorage.getItem("8:00 AM"))
$(".hour-9 .input").val(localStorage.getItem("9:00 AM"))
$(".hour-10 .input").val(localStorage.getItem("10:00 AM"))
$(".hour-11 .input").val(localStorage.getItem("11:00 AM"))
$(".hour-12 .input").val(localStorage.getItem("12:00 PM"))
$(".hour-1 .input").val(localStorage.getItem("1:00 PM"))
$(".hour-2 .input").val(localStorage.getItem("2:00 PM"))
$(".hour-3 .input").val(localStorage.getItem("3:00 PM"))
$(".hour-4 .input").val(localStorage.getItem("4:00 PM"))
$(".hour-5 .input").val(localStorage.getItem("5:00 PM"))

//*highlight row based on hour
$(".input").each(function(){
    var buttonHour = $(this).data("hour")
    var currentTime = moment().format("HH");
    if(buttonHour == currentTime){
        $(this).addClass("present")
    }
    else if(buttonHour <= currentTime){
        $(this).addClass("past")
    }
    else{
        $(this).addClass("future")
    }
})

})
//**Another way to saving and rendering it from localStorage */
//*save to local storage when button is clicked by event
// $(".saveBtn").on("click", function (event) {
//     event.preventDefault();
//     var nineTextValue = $("#nine").val()
//     localStorage.setItem("nineTextBox", nineTextValue)
//     //console.log(nineTextEl)
// })

//*getLocalStorage load back into page Method 1
// window.onload = function () {
//     var nine = localStorage.getItem("nineTextBox")
//     $("#nine").val(nine);
// }
//** */
