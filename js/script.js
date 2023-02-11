/*==================== LOADER ====================*/
window.addEventListener('load', ()=>{
  const contenedor__loader = document.querySelector('.contenedor__loader');
  contenedor__loader.style.opacity = 0;
  contenedor__loader.style.visibility = 'hidden';
})


/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== SHOW-INFO ===============*/
const navDatos = document.getElementById('nav-datos'),
    navInfo = document.getElementById('nav-info'),
    navCloseInfo = document.getElementById('close-info')

/*===== MENU INFO =====*/
if(navInfo){
    navInfo.addEventListener('click', () =>{
        navDatos.classList.add('show-info')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navCloseInfo){
    navCloseInfo.addEventListener('click', () =>{
        navDatos.classList.remove('show-info')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SWIPER JS ====================*/

let slider = document.querySelector(".slider__container");
let sliderIndividual = document.querySelectorAll(".content__slider");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 10000;

window.addEventListener("resize", function () {
  width = sliderIndividual[0].clientWidth;
});

setInterval(function () {
  slides();
}, intervalo);

function slides() {
  slider.style.transform = "translate(" + -width * contador + "px)";
  slider.style.transition = "transform 1.75s";
  contador++;

  if (contador == sliderIndividual.length) {
    setTimeout(function () {
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform 0s";
      contador = 1;
    }, 1500);
  }
}

/*=============== NAVEGACION BAR EFFECTS ON SCROLL ===============*/
window.addEventListener("scroll", function(){
  const header = this.document.querySelector(".header");
  const nav = this.document.querySelector(".nav");
  const name_logo = this.document.querySelector(".nav__logo span");
  
  
  header.classList.toggle("sticky", this.window.scrollY > 0);
  nav.classList.toggle("sticky", this.window.scrollY > 0);
  name_logo.classList.toggle("sticky", this.window.scrollY > 0);
  
});