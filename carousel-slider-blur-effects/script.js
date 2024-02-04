let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let seeMoreButton = document.querySelectorAll('.seeMore');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');

nextButton.onclick = function() {
  showSlider('next');
}

prevButton.onclick = function() {
  showSlider('prev');
}

const showSlider = (type) => {
  let items = document.querySelectorAll('.carousel .list .item');
  if(type === 'next') {
    listHTML.appendChild(items[0]);
  }
}