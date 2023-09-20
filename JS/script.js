"use strict";
import langs from "./langs.js";

// dark mod
const darlMode = document.getElementById("dark");
darlMode.addEventListener("click", () => {
  if (document.body.classList.contains("darkMode")) {
    darlMode.classList.replace("fa-sun", "fa-moon");
  } else {
    darlMode.classList.replace("fa-moon", "fa-sun");
  }
  document.body.classList.toggle("darkMode");
});

// select lang

const trans = document.getElementById("lang");

trans.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

// document.addEventListener("DOMContentLoaded", () => {
//   const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
//   setLanguage(language);
// });

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-ig9]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-ig9");
    console.log(translationKey);
    element.textContent = langs[language][translationKey];
    //   console.log(langs[language][translationKey]);
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};

// mob-menu
const mobIcon = document.querySelector(".mob-icon");
const navsLinks = document.querySelector(".navs-links");
const linksContainer = document.querySelector(".links-container");

mobIcon.addEventListener("click", () => {
  linksContainer.classList.toggle("activeL");
  navsLinks.classList.toggle("activeN");
});

// payment
const payBtn = document.getElementById("pay");
const successPay = document.querySelector(".success-pay");

payBtn.addEventListener("click", () => {
  successPay.style.opacity = "1";
  setTimeout(() => {
    successPay.style.opacity = "0";
  }, 2000);
});

// slider months
const lis = document.querySelectorAll(".two-month li");
const numsP = document.querySelector(".two-nums p");
console.log(numsP);

lis.forEach((el) => {
  el.addEventListener("click", () => {
    lis.forEach((ele) => {
      ele.classList.remove("active");
    });
    el.classList.add("active");
  });
});

// btnScroll
const btnScroll = document.querySelector(".btnScroll");

window.addEventListener("scroll", () => {
  window.scrollY >= "600"
    ? (btnScroll.style.opacity = "1")
    : (btnScroll.style.opacity = "0");
});

btnScroll.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

// animate sections
const servicesBox = document.querySelectorAll(".services-box");
const billingBox1 = document.querySelector(".billing-box1");
const billingBox2 = document.querySelector(".billing-box2");
const cardText = document.querySelector(".card-deal-text");
const cardImgs = document.querySelector(".card-deal-imgs");
const cardPeople = document.querySelectorAll(".people-card");
console.log(billingBox1.offsetTop);

window.addEventListener("scroll", () => {
  if (window.scrollY >= servicesBox[0].offsetTop - 300) {
    servicesBox[0].classList.add("animate");
  }
  if (window.scrollY >= servicesBox[1].offsetTop - 300) {
    servicesBox[1].classList.add("animate");
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY >= billingBox1.offsetTop - 400) {
    billingBox1.classList.add("animate");

    if (window.scrollY >= billingBox2.offsetTop - 400) {
      billingBox2.classList.add("animate");
    }
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= cardPeople[0].offsetTop - 400) {
    cardPeople[0].classList.add("animate");
  }
  if (window.scrollY >= cardPeople[2].offsetTop - 400) {
    cardPeople[2].classList.add("animate");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= cardText.offsetTop - 400) {
    cardText.classList.add("animate");
  }
  if (window.scrollY >= cardImgs.offsetTop - 400) {
    cardImgs.classList.add("animate");
  }
});
