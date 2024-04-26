
const navlist = document.querySelector(".navlist");


window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("scrolling", scrollY > 50);
});


let portfolioTabs = document.getElementsByClassName("portfolio-tab");
let tabContents = document.getElementsByClassName("tab-content");

function tabOpen(x) {
  for (portfolioTab of portfolioTabs) {
    portfolioTab.classList.remove("active");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-content");
  }
  event.currentTarget.classList.add("active");
  document.getElementById(x).classList.add("active-content");
}


let themeBtn = document.querySelector("#theme-btn");

themeBtn.onclick = function () {
  themeBtn.classList.toggle("ri-sun-line");
  if (themeBtn.classList.contains("ri-sun-line")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};


const typed = new Typed(".multiple-text", {
  strings: ["Fresh Graduate","Learning Front-End Developer"],
  typeSpeed: 80,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});


const sr = ScrollReveal({
  distance: "100px",
  duration: 3500,
  delay: 200,
  reset: false,
});

sr.reveal(".home-container h3", { origin: "top" });
sr.reveal(".home-container h1", { origin: "top" });
sr.reveal(".home-container p", { origin: "top" });
sr.reveal(".home-container .right", { origin: "bottom" });
sr.reveal(".social-icons-container", { origin: "bottom" });
sr.reveal(".about-container .title", { origin: "bottom" });
sr.reveal(".about-container h3", { origin: "bottom" });
sr.reveal(".about-container p", { origin: "bottom" });
sr.reveal(".about-container .top", { origin: "top" });
sr.reveal(".about-container .right", { origin: "buttom" });
sr.reveal(".services .title", { origin: "top" });
sr.reveal(".services .content-1", { origin: "top" });
sr.reveal(".services .content-2", { origin: "buttom" });
sr.reveal(".portfolio-container", { origin: "bottom" });
sr.reveal(".portfolio .title", { origin: "top" });
sr.reveal(".portfolio-buttons", { origin: "top" });
sr.reveal(".testimonial .title", { origin: "buttom" });
sr.reveal(".testimonial .testimonial-container", { origin: "top" });
sr.reveal(".contact .title", { origin: "top" });
sr.reveal(".contact .row .box", { origin: "buttom" });
sr.reveal(".contact .row .contact-form", { origin: "top" });
