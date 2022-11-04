let currentTime = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]
  
let currentDay = days[currentTime.getDay()];
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();


let formattedDate = ` ${currentDay} ${hours}:${minutes}`;

let dateEl = document.querySelector("#date")

dateEl.innerHTML = formattedDate;

let searchEl = document.querySelector("#search")

function onSubmit(event){
  event.preventDefault()
  
  let city = (searchEl.value)
  let h1El = document.querySelector("h1")
  h1El.innerHTML = city;
}
let submitEl = document.querySelector("#submit")
submitEl.addEventListener("click",onSubmit)
