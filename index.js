
const programStepOne = document.querySelector('.program__punct_step_one')
const buttonClose = programStepOne.querySelector('.program__button');
const programMenu = programStepOne.querySelector('.program__menu');
const programPunct = programStepOne.querySelector('.program__punct');
const programStepTwo = document.querySelector('.program__punct_step_two')
const programPunctTwo = programStepTwo.querySelector('.program__punct');
const programMenuTwo = programStepTwo.querySelector('.program__menu');
const buttonCloseTwo = programStepTwo.querySelector('.program__button');
const programStepThree = document.querySelector('.program__punct_step_three');
const programPunctThree = programStepThree.querySelector('.program__punct');
const programMenuThree = programStepThree.querySelector('.program__menu');
const buttonCloseThree = programStepThree.querySelector('.program__button');

// функция открытия/закрытия выпадающего меню

function openCloseMenu(element, item, color) {
   
  element.classList.toggle('program__menu_type_active');
  item.classList.toggle('program__button_type_aktive');
  color.classList.toggle('program__punct_type_aktive'); 


};

// функция плавного скролла

const page = document.querySelector('.page')
const buttonEnrollToCoursArt = document.querySelector('.art__button')
const buttonEnrollToCoursCours = document.querySelector('.cours__button')

function enableSmoothScroll() {
  page.classList.add("page-scrole-on");
  setTimeout(switchOffSmoothScroll, 2000);
}

function switchOffSmoothScroll() {
  page.classList.remove("page-scrole-on");
}


buttonEnrollToCoursArt.addEventListener('click', () => enableSmoothScroll());
buttonEnrollToCoursCours.addEventListener('click', () => enableSmoothScroll());
buttonCloseThree.addEventListener('click', () => openCloseMenu(programMenuThree, buttonCloseThree, programPunctThree));
buttonCloseTwo.addEventListener('click', () => openCloseMenu(programMenuTwo, buttonCloseTwo, programPunctTwo));
buttonClose.addEventListener('click', () => openCloseMenu(programMenu, buttonClose, programPunct));


