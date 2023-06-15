const ab = document.getElementById("welcome_text");
const btn = document.getElementById("modebutton");
const logo = document.getElementById("logo");
const items5 = document.getElementsByTagName("body");
const items6 = document.getElementsByClassName("light_mode");

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
  

    if (state2 == 0) {
        btn.style.color = "black";
        logo.style.filter = "invert(0)";
        state2 = 1;
      } else if (state2 == 1) {
        btn.style.color = "white";
        logo.style.filter = "invert(1)";
        state2 = 0;
      }
    }