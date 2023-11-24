/*Function to let the clock turn*/

// Define updateClock function
function updateClock() {
  // Get current date and time
  let date = new Date();

  // Calculate hours, minutes, and seconds
  let hour = date.getHours() % 12; // 12 hours format
  let minute = date.getMinutes();
  let second = date.getSeconds();

  // Select hour, minute, and second hands
  let hourHand = document.querySelector(".hour-hand");
  let minuteHand = document.querySelector(".min-hand");
  let secondHand = document.querySelector(".second-hand");

  // Calculate degrees for each hand
  let hourDeg = (360 / 12) * hour;
  let minuteDeg = (360 / 60) * minute;
  let secondDeg = (360 / 60) * second;

  // Rotate each hand to the corresponding degrees
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;

  // Update clock every second
}
setInterval(updateClock, 1000);

// start of the updateClock function
updateClock();

/*
Part of the code which chooses to use Day/Nightmode
*/
// Again get Local Time, so that we can use it outside of the Function
let date = new Date();
// define hourDayOrNight to choose Day/Nightmode
let hourDayOrNight = date.getHours();

//If to select day or night mode based on the time (accurate to the hour)
if (hourDayOrNight >= 7 && hourDayOrNight <= 19) {
  document.querySelector("html").style.backgroundColor = "#ffffff"; // Daymode: White Background, Black Clock

  //color inner and outer face
  document.querySelector(".inner-clock-face").style.backgroundColor = "#000000";
  document.querySelector(".outer-clock-face").style.borderColor = "#000000";

  //color markings and hands

  document.querySelectorAll(".marking").forEach((element) => {
    element.style.backgroundColor = "#000000";
  });
  document.querySelectorAll(".hand").forEach((element) => {
    element.style.backgroundColor = "#000000";
  });
} else {
  document.querySelector("html").style.backgroundColor = "#000000"; // Nightmode: Black Background, White Clock
  //color inner and outer face
  document.querySelector(".inner-clock-face").style.backgroundColor = "#ffffff";
  document.querySelector(".outer-clock-face ").style.borderColor = "#ffffff";

  //color markings and hands

  document.querySelectorAll(".marking").forEach((element) => {
    element.style.backgroundColor = "#ffffff";
  });
  document.querySelectorAll(".hand").forEach((element) => {
    element.style.backgroundColor = "#ffffff";
  });
}
