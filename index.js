const ab = document.getElementById("welcome_text");
const btn = document.getElementById("modebutton");
const logo = document.getElementById("logo");
const complogo1 = document.getElementById("complogo1");
const complogo2 = document.getElementById("complogo2");
const complogo3 = document.getElementById("complogo3");
const items5 = document.getElementsByTagName("body");
const items6 = document.getElementsByClassName("light_mode");
const items7 = document.getElementsByClassName("light-mode");
const item8 = document.getElementsByClassName("Skills");
const see0 = document.getElementById("see0");
const see1 = document.getElementById("see1");
const see2 = document.getElementById("see2");
const see3 = document.getElementById("see3");
const see4 = document.getElementById("see4");
const see5 = document.getElementById("see5");
const see6 = document.getElementById("see6");

let state = 0;

function changeText() {
  if (state == 0) {
    ab.innerHTML = "Good Morning!";
    state = 1;
  } else if (state == 1) {
    ab.innerHTML = "おはよう";
    state = 0;
  }
}

let state2 = 1;
function darkmode() {
  items5[0].classList.toggle("dark-mode");
  items6[0].classList.toggle("dark-mode");
  items6[1].classList.toggle("dark-mode");
  items6[2].classList.toggle("dark-mode");
  items6[3].classList.toggle("dark-mode");
  items6[4].classList.toggle("dark-mode");
  items7[0].classList.toggle("dark-mode");

  if (state2 == 0) {
    btn.style.color = "black";
    logo.style.filter = "invert(0)";
    complogo1.style.filter = "invert(0)";
    complogo2.style.filter = "invert(0)";
    complogo3.style.filter = "invert(0)";
    state2 = 1;
  } else if (state2 == 1) {
    btn.style.color = "white";
    logo.style.filter = "invert(1)";
    complogo1.style.filter = "invert(1)";
    complogo2.style.filter = "invert(1)";
    complogo3.style.filter = "invert(1)";
    state2 = 0;
  }
}

// lightmode  <i class="fa-regular fa-moon"></i>
// darkmode <i class="fa-solid fa-moon"></i>
