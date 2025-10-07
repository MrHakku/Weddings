
// const Days = document.getElementById('days');
// const Hours = document.getElementById('hours');
// const Minutes = document.getElementById('minutes');
// const Seconds = document.getElementById('seconds');

const future= new Date("November 4 2025 00:00:00").getTime();
function timer() {
  const present = new Date().getTime();
  const distance = future - present;

  let d = Math.floor(distance / 1000 / 60 / 60 / 24);
      h = Math.floor(distance / 1000 / 60 / 60 ) %24;
      m = Math.floor(distance / 1000 / 60 ) % 60;
      s = Math.floor(distance / 1000 ) % 60;
      
document.querySelector('.days').innerText = d;
document.querySelector('.hours').innerText = h;
document.querySelector('.minutes').innerText = m;
document.querySelector('.seconds').innerText = s;
  
  
  if(distance < 0){
   document.querySelector('.days').innerText = '0';
document.querySelector('.hours').innerText = '0';
document.querySelector('.minutes').innerText = '0';
document.querySelector('.seconds').innerText = '0';
  }
}
setInterval(timer, 900);

  function openTab(evt, eventInfo) {
    var i, tabcontent, tablinks;
  
   tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(eventInfo).style.display = "block";
    evt.currentTarget.className += " active";
  }
