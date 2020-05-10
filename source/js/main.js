var buttonMenu = document.querySelector(".main-nav__toggle");


var menu = document.querySelector(".main-nav__wrapper");

if (window.matchMedia('(max-width: 767px)').matches) {
  buttonMenu.classList.add("main-nav__toggle--menu");
  // menu.classList.add("visually-hidden");
  menu.classList.add("main-nav__wrapper--hidden");
}

buttonMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.width = menu.width;
  // menu.classList.toggle("visually-hidden");
  menu.classList.toggle("main-nav__wrapper--hidden");

  if (menu.classList.contains("main-nav__wrapper--hidden")) {
    buttonMenu.classList.add("main-nav__toggle--menu");
    buttonMenu.classList.remove("main-nav__toggle--close");
  }
  else {
    buttonMenu.classList.remove("main-nav__toggle--menu");
    buttonMenu.classList.add("main-nav__toggle--close");
  }

});

var buttonBefore = document.querySelector(".example__label--before");
var buttonAfter = document.querySelector(".example__label--after");
var exampleBefore = document.querySelector(".example__image--before");
var exampleAfter = document.querySelector(".example__image--after");
var exampleValueBar = document.querySelector(".example__bar-value");

if(buttonBefore != null) {
  buttonBefore.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (window.matchMedia('(max-width: 767px)').matches) {
      exampleAfter.classList.add("example__image--hidden");
      exampleBefore.classList.remove("example__image--hidden");
      exampleValueBar.classList.remove("example__bar-value--right");
    }
  });
}
if(buttonAfter != null) {
  buttonAfter.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (window.matchMedia('(max-width: 767px)').matches) {
      exampleAfter.classList.remove("example__image--hidden");
      exampleBefore.classList.add("example__image--hidden");
      exampleValueBar.classList.add("example__bar-value--right");
    }
  });
}


//MAP

var mapImg = document.querySelector(".location__map");

mapImg.classList.add("visually-hidden");

// var map = document.querySelector("#map");
// map.style.property.add

function init (ymaps) {
  var myMap = new ymaps.Map("map", {
    center: [59.938635, 30.323118],
    zoom: 16
  });


  var myGeoObject = new ymaps.Placemark(myMap.getCenter(), {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map-pin.png',
    iconImageSize: [124,106],
    iconImageOffset: [-53,-106]
});

  myMap.geoObjects.add(myGeoObject);

}

//slider

var offset = 0;
var bar = document.querySelector (".example__bar");
var barPoint = document.querySelector (".example__bar-value");
var beforeImage = document.querySelector (".example__image--before");
var isDown = false;
if (barPoint) {
  barPoint.addEventListener('mousedown', mDown, true);
  barPoint.addEventListener('touchstart', mDown, true);
}

document.addEventListener('mouseup', mUp, true);
document.addEventListener('touchend', mUp, true);

document.addEventListener('mousemove', mMove, true);
document.addEventListener('touchmove', mMove, true);

function mDown(e) {
  isDown = true;
  offset = e.currentTarget.offsetLeft - (e.targetTouches ? e.targetTouches[0].clientX : e.clientX);
  }

function mUp() {
    isDown = false;
 }

function mMove(e) {
  event.preventDefault();
  if (isDown) {
    var percent = (offset + (e.targetTouches ? e.targetTouches[0].clientX : e.clientX)) / bar.clientWidth * 100;
    if (percent < 0)
      percent = 0
    else if (percent > 100)
      percent = 100;

    barPoint.style.left = 'calc('+ percent + '% - 16px)';
    beforeImage.style.width = 100 - percent + '%';
 }
}
