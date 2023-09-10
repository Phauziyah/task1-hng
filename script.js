/* --- SlackUserName--*/
const element = document.getElementById("myElement");
console.log(element);
const new_text = element.dataset.text;
element.addEventListener("click", function (e) {
  console.log("keydown");
  if (element.dataset.testid === "slackUserName") {
    element.innerHTML = element.dataset.text;
  }
});

/*---track-*/
const track = document.getElementById("mySlack");
console.log(track);
const new_track = track.dataset.text;
track.addEventListener("click", function (e) {
  console.log("click");
  if (track.dataset.testid === "myTrack") {
    track.innerHTML = track.dataset.text;
  }
});

/*---Day of the week--*/
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDay = days[new Date().getDay()];
console.log(currentDay);
const day = document.getElementById("myDay");
day.innerHTML = currentDay;

/*---current utc------*/

function updateUTCTime() {
  const utcTimeElement = document.getElementById("myTime");
  const currentUTCTimeMillis = Date.now();
  utcTimeElement.setAttribute("testid", currentUTCTimeMillis);
  utcTimeElement.innerHTML = `UTC Time (in milliseconds): ${currentUTCTimeMillis}`;
}
updateUTCTime();
setInterval(updateUTCTime, 1000);
