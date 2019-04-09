"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

window.addEventListener('DOMContentLoaded', function () {
  'use strict'; 
  
  // переключение кнопок "победа" и "ничья"

  var winBtn = document.querySelectorAll('.about__info'),
      winBtnMob = document.querySelectorAll('.buttons__info'),

      // собираем в массив allBtns все кнопки победи и ничья
      allBtns = [].concat(_toConsumableArray(winBtn), _toConsumableArray(winBtnMob), [document.querySelector('.about__status'), document.querySelector('.buttons__status')]);

  if (allBtns.length > 2) {
    allBtns.forEach(function (item) {
      item.addEventListener('click', function (event) {
        for (var i = 0; i < allBtns.length; i++) {
          if (event.target === allBtns[i] || event.target.parentElement === allBtns[i]) {
            allBtns.forEach(function (item) {
              return item.classList.remove('btn-active');
            });
            allBtns[i].classList.add('btn-active');
          }
        }
      });
    });
  } 
  
  ////////

  // меню в хедере (десктоп и мобильный)

  var navLinks = document.querySelectorAll('.header__nav-link'),
      navMenu = document.querySelectorAll('.header__nav-dropdown'),
      mobBtn = document.querySelector('.header__menu-btn'),
      mobMenu = document.querySelector('.mobile-menu'),
      mobLink = _toConsumableArray(mobMenu.children),
      mobDropdown = document.querySelectorAll('.mobile-menu__dropdown');

  var showMob = false;

  var hideAll = function hideAll() {
    navMenu.forEach(function (item) {
      return item.style.display = 'none';
    });
  };

  mobBtn.addEventListener('click', function () {
    if (!mobMenu.classList.contains('show')) {
      mobMenu.classList.add('show');
      mobMenu.classList.add('fadeIn');
      mobMenu.classList.remove('fadeOut');
      mobBtn.style.backgroundImage = 'url("./img/cancel.svg")';
      setTimeout(function () {
        return showMob = true;
      }, 1);
    }
  });

  document.body.addEventListener('click', function (event) {
    if (showMob && !event.target.classList.value.includes('mobile-menu')) {
      mobMenu.classList.remove('fadeIn');
      mobMenu.classList.add('fadeOut');
      setTimeout(function () {
        mobMenu.classList.remove('show');
        showMob = false;
      }, 500);
      mobBtn.style.backgroundImage = 'url("./img/menu.svg")';
    }
  });

  mobLink.forEach(function (item, i) {
    item.addEventListener('click', function () {
      if (mobDropdown[i].style.display !== 'flex') {
        mobDropdown.forEach(function (item) {
          return item.style.display = 'none';
        });
        mobDropdown[i].style.display = 'flex';
      } else {
        mobDropdown[i].style.display = 'none';
      }
    });
  });

  hideAll();

  navLinks.forEach(function (item, i) {
    item.addEventListener('mouseenter', function () {
      if (navMenu[i].style.display === 'none') {
        hideAll();
        navMenu[i].style.display = 'flex';
      }
    });
  });

  navMenu.forEach(function (item) {
    item.addEventListener('mouseleave', function () {
      item.style.display = 'none';
    });
  }); 
  
  ////////

  // блок редактирования параметров бойцов (кнопки и инпуты)

  var onChangeParams = function onChangeParams(elem) {
    var btn = elem.querySelector('.params__change'),
        spans = elem.querySelectorAll('span'),
        inputs = elem.querySelectorAll('input');

    inputs.forEach(function (item) {
      return item.style.display = 'none';
    });

    if (btn) {
      btn.addEventListener('click', function () {

        if (inputs[0].style.display === 'none') {
          btn.classList.remove('params__change_change');
          btn.classList.add('params__change_done');
          spans.forEach(function (item) {
            return item.style.display = 'none';
          });

          inputs.forEach(function (item, i) {
            inputs[i].value = spans[i].textContent;
            item.style.display = 'inline';
          });
        } else {
          btn.classList.remove('params__change_done');
          btn.classList.add('params__change_change');

          spans.forEach(function (item, i) {
            spans[i].textContent = inputs[i].value;
            item.style.display = 'inline';
          });

          inputs.forEach(function (item) {
            return item.style.display = 'none';
          });
        }
      });
    }
  };

  document.querySelectorAll('.params').forEach(function (item) {
    return onChangeParams(item);
  }); 
  
  //////

  // всплывающее окно и раскрытие таблиц с боями

  var columnBtns = document.querySelectorAll('.matches-header'),
      spanText = document.querySelectorAll('.wrap-btn__show'),
      wrapper = document.querySelectorAll('.matches-column');

  columnBtns.forEach(function (item, i) {
    var matches = wrapper[i].querySelectorAll('.tournament');

    item.addEventListener('click', function () {
      if (spanText[i].textContent === 'спрятать') {
        matches.forEach(function (item) {
          return item.style.display = 'none';
        });
        spanText[i].textContent = 'показать';
        wrapper[i].querySelector('img').style.transform = 'rotate(0deg)';
      } else {
        matches.forEach(function (item) {
          return item.style.display = 'block';
        });
        spanText[i].textContent = 'спрятать';
        wrapper[i].querySelector('img').style.transform = 'rotate(180deg)';
      }
    });
  });
  columnBtns.forEach(function (item) {
    return item.click();
  });

  var popup = document.querySelector('.popup'),
      rowItems = document.querySelectorAll('.match'),
      closePopBtn = document.querySelector('#close');
  var show = false;

  rowItems.forEach(function (item) {
    item.addEventListener('click', function () {
      if (!show) {
        var target = item.parentNode.parentNode;

        for (var i = 0; i < wrapper.length; i++) {
          var width = parseInt(getComputedStyle(wrapper[i]).width.slice(0, -2));

          if (target === wrapper[i] && popup && document.body.clientWidth > 767) {
            switch (i) {
              case 0:
                popup.style.left = "".concat(width, "px");
                popup.style.display = 'flex';
                break;

              case 1:
                popup.style.left = "".concat(width - 335, "px");
                popup.style.display = 'flex';
                break;
            }
          }
        }

        setTimeout(function () {
          return show = true;
        }, 1);
      }
    });
  });

  document.body.addEventListener('click', function (event) {
    var target = event.target.parentElement;

    if (popup && show && !event.target.classList.value.includes('match') && !target.classList.value.includes('match') && !target.classList.value.includes('popup') || event.target === closePopBtn) {
      popup.style.display = 'none';
      show = false;
    }
  }); 
  
  ///////////

  // раскрытие списка бойцов на мобильных устройствах

  var listBtn = document.querySelector('.fighters-list__btn'),
      listItems = document.querySelectorAll('.fighter-item');
      
  listItems.forEach(function (item) {
    return item.classList.add('show-list');
  });

  if (listBtn) {
    listBtn.addEventListener('click', function () {
      if (listItems[0].classList.contains('show-list')) {
        listItems.forEach(function (item) {
          return item.classList.remove('show-list');
        });
      } else {
        listItems.forEach(function (item) {
          return item.classList.add('show-list');
        });
      }
    });
  }
});
