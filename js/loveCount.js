
const yourDate = new Date("2022-12-19T00:00:00")

let checkDay = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24);

let booleanCheckday = Boolean(checkDay >= 190);

console.log(booleanCheckday);

document.addEventListener('DOMContentLoaded', function(){
      var rootTime_hour = document.getElementById("love-days__time-hour");
      var rootTime_minute = document.getElementById("love-days__time-minute");
      var rootTime_second = document.getElementById("love-days__time-second");


      document.querySelector("anni").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;
      
      document.querySelector("date").textContent = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24)+"";

      function olock() {
            var today = new Date(),
            hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
            sec =  Math.floor((today - yourDate) / 1000) % 60;
            rootTime_hour.textContent = `${(hrs>9)?hrs:"0"+hrs} `;
            rootTime_minute.textContent = `${(min>9)?min:"0"+min}  `;
            rootTime_second.textContent = `${(sec>9)?sec:"0"+sec} `;
      } olock();
      var timer = setInterval(function(){olock()}, 1000);
}, false);
