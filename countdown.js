const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

// let futureDate = new Date(2023, 4, 24, 11, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();

giveaway.textContent = `giveaway ends on ${weekdays[futureDate.getDay()]}, ${date} ${months[futureDate.getMonth()]} ${year} ${hours}:${minutes}`;

const futureTime = futureDate.getTime();

function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today
    

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour / oneMinute));
    let seconds = Math.floor((t % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];

    function format(a){
        if (a < 10) {
            return (a =`0${a}`);
        }
        return a;
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    });
    if (t < 0) {
        clearInterval(countdown)
        deadline.innerHTML = `<h4 class='expired'>sorry, this giveaway has expired</h4>`;
    }
};

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();