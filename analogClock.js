// Define updateClock function
function updateClock() {
  // Get current date and time
  let now = new Date();

  // Calculate hours, minutes, and seconds
  let hour = now.getHours() % 12; // 12 hours format
  let minute = now.getMinutes();
  let second = now.getSeconds();

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

let hourDayorNight = date.getHours();

if (hourDayorNight >= 7 && hourDayorNight <= 19) {
  document.querySelector("html").style.backgroundColor = "#ffffff"; // Daymode: White Background, Black Clock
  document.querySelector("html").style.color = "#000000";
} else {
  document.querySelector("html").style.backgroundColor = "#000000"; // Nightmode: Black Background, White Clock
  //color inner and outer face
  document.querySelector(".inner-clock-face").style.backgroundColor = "#fff";
  document.querySelector(".outer-clock-face").style.borderColor = "#ffffff";
  //color markings and hands

  document.querySelectorAll(".marking").forEach((element) => {
    element.style.backgroundColor = "#fff";
  });
  document.querySelectorAll(".hand").forEach((element) => {
    element.style.backgroundColor = "#fff";
  });
}
