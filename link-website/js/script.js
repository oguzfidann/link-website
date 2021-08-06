let logo = document.querySelector(".logo-bar img");
let link1 = document.querySelector(".link1");
let link2 = document.querySelector(".link2");
let link3 = document.querySelector(".link3");
let btn1 = document.querySelector(".btn1");
let container = document.querySelector(".container");
let bigImg = document.querySelector(".big-link img");

let buttonColor = document.querySelectorAll(".menu ul li a");
let i;

link1.onclick = function () {
  container.style.background = "#C63F68";
  bigImg.src = "/images/link-1.png";
  btn1.style.color = "#C63F68";
  for (i = 0; i < buttonColor.length; i++) {
    buttonColor[i].style.color = "#C63F68";
  }
};

link2.onclick = function () {
  container.style.background = "#FBA100";
  bigImg.src = "/images/link-3.png";
  btn1.style.color = "#FBA100";
  for (i = 0; i < buttonColor.length; i++) {
    buttonColor[i].style.color = "#FBA100";
  }
};

link3.onclick = function () {
  container.style.background = "#9D3536";
  bigImg.src = "/images/link-2.png";
  btn1.style.color = "#9D3536";
  for (i = 0; i < buttonColor.length; i++) {
    buttonColor[i].style.color = "#9D3536";
  }
};

logo.onclick = function () {
  container.style.background = "#004F9D";
  bigImg.src = "/images/link-1.png";
  btn1.style.color = "#004F9D";
  for (i = 0; i < buttonColor.length; i++) {
    buttonColor[i].style.color = "#004F9D";
  }
};

/*

function Link(anything) {
    document.querySelector(".big-img").src = anything;
}


function changeBgColor(color) {
    let container = document.querySelector('.container');
    container.style.background = color;
}

*/
