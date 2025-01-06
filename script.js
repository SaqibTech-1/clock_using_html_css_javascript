

const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const day = document.getElementById('day');

const monthName = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function updateClock() {
  const today = new Date();

  const d = today.getDate();
  const m = today.getMonth();
  const y = today.getFullYear();
  let h = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  // Determine AM or PM
  const ampm = h >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  h = h % 12;
  h = h === 0 ? 12 : h; // If hour is 0, set to 12 (midnight or noon)

  // Add leading zeros
  const formattedHour = h < 10 ? '0' + h : h;
  const formattedMinute = min < 10 ? '0' + min : min;
  const formattedSecond = sec < 10 ? '0' + sec : sec;

  // Update DOM elements
  day.textContent = `${d} ${monthName[m]} ${y}`;
  hour.textContent = `${formattedHour} ${ampm}`;
  minute.textContent = formattedMinute;
  second.textContent = formattedSecond;
}

// Call updateClock immediately and every second
updateClock();
setInterval(updateClock, 1000);
