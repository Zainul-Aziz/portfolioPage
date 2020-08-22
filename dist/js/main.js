const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));
    //show menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));
    //show menu state
    showMenu = false;
  }
}
//Typing
class Type {
  constructor(txtElement, words, wait = 2000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 7);
    this.type();
    this.isDelete = false;
  }
  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];
    if (this.isDelete) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    let typeSpeed = 130;
    if (this.isDelete) {
      typeSpeed = typeSpeed / 2;
    }
    if (!this.isDelete && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDelete = true;
    } else if (this.isDelete && this.txt === "") {
      this.isDelete = false;
      this.wordIndex++;
      typeSpeed = 150;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  new Type(txtElement, words, wait);
}
