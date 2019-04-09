window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // переключение кнопок "победа" и "ничья"
  const winBtn = document.querySelectorAll('.about__info'),
    winBtnMob = document.querySelectorAll('.buttons__info'),
    allBtns = [...winBtn, ...winBtnMob, document.querySelector('.about__status'), document.querySelector('.buttons__status')];

  if (allBtns.length > 2) {
    allBtns.forEach((item) => {
      item.addEventListener('click', (event) => {
        for (let i = 0; i < allBtns.length; i++) {
          if (event.target === allBtns[i] || event.target.parentElement === allBtns[i]) {
            allBtns.forEach(item => item.classList.remove('btn-active'));
            allBtns[i].classList.add('btn-active');
          }
        }
      });
    });
  }

  ////////

  // меню в хедере (десктоп и мобильный)
  const navLinks = document.querySelectorAll('.header__nav-link'),
    navMenu = document.querySelectorAll('.header__nav-dropdown'),
    mobBtn = document.querySelector('.header__menu-btn'),
    mobMenu = document.querySelector('.mobile-menu'),
    mobLink = [...mobMenu.children],
    mobDropdown = document.querySelectorAll('.mobile-menu__dropdown');

  let showMob = false;

  const hideAll = () => {
    navMenu.forEach(item => item.style.display = 'none');
  }

  mobBtn.addEventListener('click', () => {

    if (!mobMenu.classList.contains('show')) {
      mobMenu.classList.add('show');
      mobMenu.classList.add('fadeIn');
      mobMenu.classList.remove('fadeOut');
      mobBtn.style.backgroundImage = 'url("./img/cancel.svg")';
      setTimeout(() => showMob = true, 1);
    }

  });

  document.body.addEventListener('click', (event) => {

    if (showMob && !event.target.classList.value.includes('mobile-menu')) {
      mobMenu.classList.remove('fadeIn');
      mobMenu.classList.add('fadeOut');
      setTimeout(() => {
        mobMenu.classList.remove('show');
        showMob = false;
      }, 500);
      mobBtn.style.backgroundImage = 'url("./img/menu.svg")';
    }
  });

  mobLink.forEach((item, i) => {
    item.addEventListener('click', () => {

      if (mobDropdown[i].style.display !== 'flex') {
        mobDropdown.forEach(item => item.style.display = 'none');
        mobDropdown[i].style.display = 'flex';
      } else {
        mobDropdown[i].style.display = 'none';
      }
    });
  });

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

////////

// блок редактирования параметров бойцов (кнопки и инпуты)
  const onChangeParams = (elem) => {
    const btn = elem.querySelector('.params__change'),
          spans = elem.querySelectorAll('span'),
          inputs = elem.querySelectorAll('input');

    inputs.forEach(item => item.style.display = 'none');

    if (btn) {
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
  }

  document.querySelectorAll('.params').forEach(item => onChangeParams(item));
//////

// всплывающее окно и раскрытие таблиц с боями

  const columnBtns = document.querySelectorAll('.matches-header'),
    spanText = document.querySelectorAll('.wrap-btn__show'),
    wrapper = document.querySelectorAll('.matches-column');


  columnBtns.forEach((item, i) => {
    const matches = wrapper[i].querySelectorAll('.tournament');

    item.addEventListener('click', () => {
      if (spanText[i].textContent === 'спрятать') {

        matches.forEach(item => item.style.display = 'none');
        spanText[i].textContent = 'показать';
        wrapper[i].querySelector('img').style.transform = 'rotate(0deg)';
      } else {
        matches.forEach(item => item.style.display = 'block');
        spanText[i].textContent = 'спрятать';
        wrapper[i].querySelector('img').style.transform = 'rotate(180deg)';
      }
    });
  });

  columnBtns.forEach(item => item.click());

  const popup = document.querySelector('.popup'),
    rowItems = document.querySelectorAll('.match'),
    closePopBtn = document.querySelector('#close');

  let show = false;

  rowItems.forEach((item) => {
    item.addEventListener('click', () => {

      if (!show) {
        const target = item.parentNode.parentNode;

        for (let i = 0; i < wrapper.length; i++) {
          const width = parseInt(getComputedStyle(wrapper[i]).width.slice(0, -2));

          if (target === wrapper[i] && popup && document.body.clientWidth > 767) {

            switch (i) {
              case 0:
                popup.style.left = `${width}px`;
                popup.style.display = 'flex';
                break;
              case 1:
                popup.style.left = `${width - 335}px`;
                popup.style.display = 'flex';
                break;
            }
          }
        }
        setTimeout(() => show = true, 1);
      }
    });
  });

  document.body.addEventListener('click', (event) => {
    const target = event.target.parentElement;

    if (popup &&
        show &&
        !event.target.classList.value.includes('match') &&
        !target.classList.value.includes('match') &&
        !target.classList.value.includes('popup') ||
        event.target === closePopBtn) {
      popup.style.display = 'none';
      show = false;
    }
  });
///////////

// раскрытие списка бойцов на мобильных устройствах

  const listBtn = document.querySelector('.fighters-list__btn'),
    listItems = document.querySelectorAll('.fighter-item');

  listItems.forEach(item => item.classList.add('show-list'));

  if (listBtn) {
    listBtn.addEventListener('click', () => {
      if (listItems[0].classList.contains('show-list')) {
        listItems.forEach(item => item.classList.remove('show-list'));
      } else {
        listItems.forEach(item => item.classList.add('show-list'));
      }
    });
  }
});