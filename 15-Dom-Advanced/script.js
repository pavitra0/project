// const btn1 = document.querySelector('.btn1')
// const btn2 = document.querySelector('.btn2')
// const btn3 = document.querySelector('.btn3')

// const screen = document.querySelector('.display')

// btn1.addEventListener('click',()=>{
//     console.log('hi')
//   document.querySelector('body').style.backgroundColor = 'red'
//   screen.textContent = 'STOP'
// })

// btn2.addEventListener('click',()=>{
//     console.log('he')
//   document.querySelector('body').style.backgroundColor = 'yellow'
//   screen.textContent = 'SLOW'
// })
// btn3.addEventListener('click',()=>{
//   document.querySelector('body').style.backgroundColor = 'lightgreen'
//   screen.textContent = 'GO!'
// })
// 'use strict';

// ///////////////////////////////////////
// // Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const section1 = document.querySelector("#section--1");
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
//Scrolling Links
document.querySelector(".nav__links").addEventListener("click", (e) => {
  // console.log(e.target)
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });

    // console.log(document.querySelector(id))
  }
});

//Tabbed component

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  console.log(clicked);
  //Guard Clause
  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));
  clicked.classList.add("operations__tab--active");

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//Hovering Effect
const nav = document.querySelector(".nav");
// const handleHover = (e, opacity) => {
//   // console.log(this)
//   if (e.target.classList.contains("nav__link")) {
//     const link = e.target;
//     const siblings = link.closest(".nav").querySelectorAll(".nav__link");
//     const logo = link.closest(".nav").querySelector("img");

//     siblings.forEach((el) => {
//       if (el !== link) el.style.opacity = opacity;
//     });
//     logo.style.opacity = opacity;
//   }
// };

// nav.addEventListener('mouseover',function (e){  handleHover(0.5)})
// nav.addEventListener('mouseout',function (e){  handleHover(0.5)})

//Sticky NAv
// window.addEventListener('scroll', function(){
//   nav.classList.add('sticky')
// })

// const obsCallBack = (entries, observer) => entries.forEach(entry => console.log(entry))

// const obsOptions = {
//   root:null,
//   limit: 0.3,
// }
// const observer = new IntersectionObserver(obsCallBack,obsOptions)
// observer.observe(section1)

//Sticky nav
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = (entries) => {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const hearderObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

hearderObserver.observe(header);

//generating animation
const allSections = document.querySelectorAll(".section");

const revealSection = (entries, observer) => {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.3,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});

//Lazy loading img
const imgs = document.querySelectorAll("img[data-src]");

// console.log(imgs)

const loadImg = (entries, observer) => {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) entry.target.dataset.src;
  //replace lazy img with orignal img
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgs.forEach((img) => imgObserver.observe(img));

///Slider
const sliderMain = () =>{
  
const dotContainer = document.querySelector(".dots");

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

const createDots = () => {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class='dots__dot' data-slide='${i}'> </button>`
    );
  });
};
createDots();

const activateDot = (slide) => {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document.querySelector(`.dots__dot[data-slide='${slide}']`).classList.add('dots__dot--active')
};

activateDot(0)

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = (slide) => {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

const nextSlide = () => {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activateDot(curSlide)
};

const prevSlide = () => {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide)
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  e.key === "ArrowLeft" && prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

dotContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("dots__dot")) {
    console.log("dot");
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide)
  }
});
}
sliderMain()

window.addEventListener('beforeunload',function (e){
  console.log(e)
  e.preventDefault()
  e.returnValue = ''
})
// const header = document.querySelector(".header");

// const message = document.createElement("div");
// message.classList.add("cookie-message");

// message.innerHTML = `Welcome Accept the Cookies Or Die 😁. <button class='btn btn--close-modal'>Accept All</button>`;

// header.append(message);

// document.querySelector(".btn--close-modal").addEventListener("click", () => {
//   // console.log('click')
//   message.remove();
// });

// //STYLES
// message.style.backgroundColor = "#37352b";
// message.style.width = "106.90%";
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 30 + "px";
// console.log(message.style.height);

//   document.documentElement.style.setProperty("--color-primary", "orangered")

// ///Atributes
// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// logo.alt = 'pavitra'
// logo.setAttribute('thank','you')
// console.log(logo.getAttribute('src'));
// console.log(logo.getAttribute('designer'));

// const btnScrollTo = document.querySelector('.btn--scroll-to')
// const section1 = document.querySelector('#section--1')

// btnScrollTo.addEventListener('click', ()=>{

//   // const s1coords = section1.getBoundingClientRect()
//   // console.log(s1coords)

//   // console.log('current scro l x y ', document.documentElement.clientHeight,document.documentElement.clientHeight)

//   section1.scrollIntoView({behavior: "smooth"})
// })

////////////////////////////////////
// const text = 'szztridsjkfhiashfdng'

// const obj = {}
// for(let i of text){
// if(!obj[i])
//   obj[i] = 1

//   else {
//     obj[i]++
//   }

// }

// console.log(obj)
