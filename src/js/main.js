import mobmenu from './parts/mob-menu';
import fighterlist from './parts/fighter-list';
import onChangeParams from './parts/params';
import popup from './parts/popup';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  mobmenu();
  fighterlist();
  popup();

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

  document.querySelectorAll('.params').forEach(item => onChangeParams(item));

});

