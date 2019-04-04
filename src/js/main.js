window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const navLinks = document.querySelectorAll('.nav-link'),
        navMenu = document.querySelectorAll('.nav-link__menu');

  const hideAll = () => {
    navMenu.forEach(item => item.style.display = 'none');
  }

  hideAll();

  navLinks.forEach((item, i) => {
    item.addEventListener('mouseenter', () => {
      if (navMenu[i].style.display === 'none') {
        hideAll();
        navMenu[i].style.display = 'flex';
      }
    });
  });

  navMenu.forEach((item) => {
    item.addEventListener('mouseleave', () => {
      item.style.display = 'none';
    });
  });
  

  /////

  const columnBtns = document.querySelectorAll('.wrap-btn'),
        spanText = document.querySelectorAll('.show'),
        columns = document.querySelectorAll('.matches__content'),
        wrapper = document.querySelectorAll('.matches__column');

  columnBtns.forEach((item, i) => {

    item.addEventListener('click', () => {
      if (spanText[i].textContent === 'спрятать') {
        
        columns[i].style.display = 'none';
        wrapper[i].classList.add('matches__column_hide');
        spanText[i].textContent = 'показать';
        wrapper[i].querySelector('img').style.transform = 'rotate(180deg)';
      }
      else {
        columns[i].style.display = 'block';
        wrapper[i].classList.remove('matches__column_hide');
        spanText[i].textContent = 'спрятать';
        wrapper[i].querySelector('img').style.transform = 'rotate(0deg)';
      }
    });
  });

  columnBtns.forEach(item => item.click());

  /////

  const popup = document.querySelector('.popup'),
        rowItems = document.querySelectorAll('.matches__item');
  let show = false;

  rowItems.forEach((item) => {
    item.addEventListener('click', () => {

      if (!show) {
        const target = item.parentNode;
        for (let i = 0; i < columns.length; i++) {
          if (target === columns[i] && popup) {
            popup.style.left = `${540 - 320 * i}px`;
            popup.style.display = 'flex';
          }
        }
        setTimeout(() => show = true, 1);
      }      
    });
  });

  document.body.addEventListener('click', (event) => {
    const target = event.target.parentElement;

    if (popup && show && !target.classList.value.includes('popup')) {
      popup.style.display = 'none';
      show = false;
    }
  });

  ////

  function onChangeParams (elem) {
    const btn = elem.querySelector('.params__change'),
          spans = elem.querySelectorAll('span'),
          inputs = elem.querySelectorAll('input');

    inputs.forEach(item => item.style.display = 'none');

    btn.addEventListener('click', () => {

      if (inputs[0].style.display === 'none') {
        btn.classList.remove('params__change_change');
        btn.classList.add('params__change_done');

        spans.forEach(item => item.style.display = 'none');
        inputs.forEach((item, i) => {
          inputs[i].value = spans[i].textContent;
          item.style.display = 'inline';
        });
      }
      else {
        btn.classList.remove('params__change_done');
        btn.classList.add('params__change_change');

        spans.forEach((item, i) => {
          spans[i].textContent = inputs[i].value;
          item.style.display = 'inline';
        });
        inputs.forEach(item => item.style.display = 'none');
      }
    });
  }

  document.querySelectorAll('.params').forEach(item => onChangeParams(item));

  });

