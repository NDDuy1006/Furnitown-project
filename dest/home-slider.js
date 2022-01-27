
// ====== HOME SLIDER CAROUSEL ======

const mainCarousel = document.querySelector('.main-carousel');
const flkty = new Flickity(mainCarousel, {
  autoPlay: 3000,
    selectedAttraction: 0.01,
    friction: 0.25,
    cellAlign: 'left',
    contain: true,
    wrapAround:true,
    prevNextButtons: false,
    pageDots: false,
    draggable: false,
})

const previousButton = document.querySelector('.--home-prev');
previousButton.addEventListener('click', function() {
  flkty.previous();
});

const nextButton = document.querySelector('.--home-next');
nextButton.addEventListener('click', function() {
  flkty.next();
})