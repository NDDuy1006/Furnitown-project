
// ====== PRODUCTS PAGE MULTI-CAROUSEL ======
// 1 nodelist chứa tất cả các 5 div, mỗi div bọc 1 flickity carousel
const carouselContainers = document.querySelectorAll(' .carousel-container');

// loop qua từng phần tử của nodelist, mỗi lần lặp gắn biến cho từng phần tử và gọi function initItemsCarousel để khởi tạo flikity carousel bên trong div chứa flickity
for ( let i = 0; i < carouselContainers.length; i++ ) {
  const container = carouselContainers[i];
  initItemsCarousel(container);
}

// function khởi tạo flickity carousel
function initItemsCarousel(container) {
  const carousel = container.querySelector('.items-carousel');
  const flkty = new Flickity(carousel, {
    cellAlign: 'center',
    contain: true,
    wrapAround:true,
    prevNextButtons: false,
    draggable: false,
    pageDots: false,
    percentPosition: false
  });

  const previousButton = container.querySelector('.--prev');
  previousButton.addEventListener('click', function() {
    flkty.previous();
  });
  const nextButton = container.querySelector('.--next');
  nextButton.addEventListener('click', function() {
    flkty.next();
  });
}

// ====== PRELOADER ======
const loader = document.querySelector('.preloader');
window.addEventListener('load', function () {
  loader.classList.add('disappear')
})

// ====== HEADER SLIDE DOWN ON SCROLL ======
let textTop = document.querySelector('.text-top');
// let textTopHeight = textTop.clientHeight;
let btnMenu = document.querySelector('.btn-menu');
let btnMenuOffsetY = btnMenu.clientTop;
let header = document.querySelector('header');

document.addEventListener('scroll', function() {
  let scrollY = window.pageYOffset;
  if (scrollY > 250) {
    header.classList.add('header-slide-down');
    btnMenu.classList.add('translate-active');
  } else {
    header.classList.remove('header-slide-down');
    btnMenu.classList.remove('translate-active');
  }
})

// ====== LEFT-NAV BTN TOGGLES LEFT-NAV MENU ======
const menuButton = document.querySelector('.btn-menu__hover'),
navLeft = document.querySelector('.nav-left'),
navOverlay = document.querySelector('.nav-overlay'),
navOverlayActive = document.querySelector('.nav-overlay__active'),
mobileButton = document.querySelector('.span-btn'),
closeButton = document.querySelector('.left-col__close-btn');
// click menuButton, navLeft hiện ra
menuButton.addEventListener('click', function() {
  navLeft.classList.add('left-nav__active');
  // navOverlay hiện ra theo navLeft
  navOverlay.classList.add('nav-overlay__active');
});
// click vùng bên ngoài (navOverlay), navLeft ẩn
navOverlay.addEventListener('click', function() {
  navLeft.classList.remove('left-nav__active');
  this.classList.remove('nav-overlay__active');
})
// click closeButton, navLeft ẩn
closeButton.addEventListener('click', function() {
  navLeft.classList.remove('left-nav__active');
  navOverlay.classList.remove('nav-overlay__active');
})
// click mobileButton ẩn/hiện navLeft
mobileButton.addEventListener('click', function() {
  this.classList.toggle('span-btn__active');
  navLeft.classList.toggle('left-nav__active');
})

//====== PROJECTS DROPDOWN-OPTIONS ======
const dropdownBtn = document.querySelector('.selected-text');
const dropdownOptions = document.querySelector('.dropdown-options');
dropdownBtn.addEventListener('click', function() {
  dropdownOptions.classList.toggle('options__hidden');
})
