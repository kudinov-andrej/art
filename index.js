
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



function openMenu(element, item, color) {
  element.classList.add('program__menu_type_active');
  item.classList.add('program__button_type_aktive');
  color.classList.add('program__punct_type_aktive');
 
};

function closeMenu(element, item, color) {
  element.classList.remove('program__menu_type_active');
  item.classList.remove('program__button_type_aktive');
  color.classList.remove('program__punct_type_aktive');
 
};

programMenu.addEventListener('click', () => closeMenu(programMenu, buttonClose, programPunct));
programMenuTwo.addEventListener('click', () => closeMenu(programMenuTwo, buttonCloseTwo, programPunctTwo));
programMenuThree.addEventListener('click', () => closeMenu(programMenuThree, buttonCloseThree, programPunctThree));


buttonCloseThree.addEventListener('click', () => openMenu(programMenuThree, buttonCloseThree, programPunctThree));
buttonCloseTwo.addEventListener('click', () => openMenu(programMenuTwo, buttonCloseTwo, programPunctTwo));
buttonClose.addEventListener('click', () => openMenu(programMenu, buttonClose, programPunct));
