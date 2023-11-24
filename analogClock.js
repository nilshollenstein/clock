function updateClock() {
  let now = new Date();
  let hour = now.getHours() % 12; // 12-Stunden-Format
  let minute = now.getMinutes();
  let second = now.getSeconds();

  let hourHand = document.querySelector(".hour-hand");
  let minuteHand = document.querySelector(".min-hand");
  let secondHand = document.querySelector(".second-hand");

  let hourDeg = (360 / 12) * hour;
  let minuteDeg = (360 / 60) * minute;
  let secondDeg = (360 / 60) * second;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  7;
}

setInterval(updateClock, 1000);

// Initialer Aufruf, um die Uhrzeit sofort anzuzeigen
updateClock();
