// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

// $('.saveBtn').on('click', function{}

// var note = $(this).siblings{".description"}. val{};
// var time = $(this).
// )


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});




function updateDateTime() {
  var today = dayjs();
  $('#currentDay').text(today.format('dddd - MMM D, YYYY, h:mm:ss'));
}

setInterval(updateDateTime, 1000);




// Get references to the time-block elements
const timeBlock1 = document.getElementById("#hour-9");
const timeBlock2 = document.getElementById("#hour-10");
const timeBlock3 = document.getElementById("#hour-11");
const timeBlock4 = document.getElementById("#hour-12");
const timeBlock5 = document.getElementById("#hour-1");
const timeBlock6 = document.getElementById("#hour-2");
const timeBlock7 = document.getElementById("#hour-3");
const timeBlock8 = document.getElementById("#hour-4");
const timeBlock9 = document.getElementById("#hour-5");

// Get the current time
const currentTimeMs = Date.now();

// Get the time represented by each time-block
const timeBlock1Time = new Date(timeBlock1.dataset.time);
const timeBlock2Time = new Date(timeBlock2.dataset.time);
const timeBlock3Time = new Date(timeBlock3.dataset.time);
const timeBlock4Time = new Date(timeBlock4.dataset.time);
const timeBlock5Time = new Date(timeBlock5.dataset.time);
const timeBlock6Time = new Date(timeBlock6.dataset.time);
const timeBlock7Time = new Date(timeBlock7.dataset.time);
const timeBlock8Time = new Date(timeBlock8.dataset.time);
const timeBlock9Time = new Date(timeBlock9.dataset.time);

// Compare the times and add or remove classes accordingly
if (timeBlock1Time < currentTimeMs) {
  timeBlock1.classList.add(".past");
} else if (timeBlock1Time > currentTimeMs) {
  timeBlock1.classList.add(".future");
} else {
  timeBlock1.classList.add(".present");
}

if (timeBlock2Time < currentTime) {
  timeBlock2.classList.add(".past");
} else if (timeBlock2Time > currentTimeMs) {
  timeBlock2.classList.add(".future");
} else {
  timeBlock2.classList.add(".present");
}

if (timeBlock3Time < currentTimeMs) {
  timeBlock3.classList.add(".past");
} else if (timeBlock3Time > currentTimeMs) {
  timeBlock3.classList.add(".future");
} else {
  timeBlock3.classList.add(".present");
}

if (timeBlock4Time < currentTimeMs) {
  timeBlock4.classList.add(".past");
} else if (timeBlock4Time > currentTimeMs) {
  timeBlock4.classList.add(".future");
} else {
  timeBlock4.classList.add(".present");
}

if (timeBlock5Time < currentTimeMs) {
  timeBlock5.classList.add(".past");
} else if (timeBlock5Time > currentTimeMs) {
  timeBlock5.classList.add(".future");
} else {
  timeBlock5.classList.add(".present");
}

if (timeBlock6Time < currentTimeMs) {
  timeBlock6.classList.add(".past");
} else if (timeBlock6Time > currentTimeMs) {
  timeBlock6.classList.add(".future");
} else {
  timeBlock6.classList.add(".present");
}

if (timeBlock7Time < currentTimeMs) {
  timeBlock7.classList.add(".past");
} else if (timeBlock7Time > currentTimeMs) {
  timeBlock7.classList.add(".future");
} else {
  timeBlock7.classList.add(".present");
}

if (timeBlock8Time < currentTimeMs) {
  timeBlock8.classList.add(".past");
} else if (timeBlock8Time > currentTimeMs) {
  timeBlock8.classList.add(".future");
} else {
  timeBlock8.classList.add(".present");
}

if (timeBlock9Time < currentTimeMs) {
  timeBlock9.classList.add(".past");
} else if (timeBlock9Time > currentTimeMs) {
  timeBlock9.classList.add(".future");
} else {
  timeBlock9.classList.add(".present");
}
