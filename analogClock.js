function updateClock() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  //document.write(`date${date} minute${minute} second${second}`);
}

let date = updateClock()[0];
let hour = updateClock()[1];
let minute = updateClock()[2];
let second = updateClock()[3];

setInterval(updateClock, 1000);

updateClock();
