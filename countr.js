let z=document.getElementById("clock");
function displayTime() {
  var d =new Date();
  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  var amOrpm = "AM";
  if (hour >= 12) {
    amOrpm = "PM";
  }
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
document.getElementById("clock").innerHTML =
    hour + ":" + min + ":" + sec + " " + amOrpm ;
}
 
 
 
setInterval(displayTime, 1000);
