const dayBox = document.getElementById("day-box");
const hrBox = document.getElementById("hr-box");
const minBox = document.getElementById("min-box");
const secBox = document.getElementById("sec-box");

// Set the target date
const targetDate = new Date("January 1, 2025 00:00:00");

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Define the updateCountdown function
function updateCountdown() {
  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const diff = targetDate - currentDate;

  // Convert the difference to days, hours, minutes, and seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Display the countdown
  dayBox.textContent = days < 10 ? "0" + days : days;
  hrBox.textContent = hours < 10 ? "0" + hours : hours;
  minBox.textContent = minutes < 10 ? "0" + minutes : minutes;
  secBox.textContent = seconds < 10 ? "0" + seconds : seconds;
}