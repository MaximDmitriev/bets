import mobmenu from './parts/mob-menu';
import fighterlist from './parts/fighter-list';
import onChangeParams from './parts/params';
import popup from './parts/popup';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  mobmenu();
  fighterlist();
  popup();

  

  /////


  ////

  // function onChangeParams (elem) {
  //   const btn = elem.querySelector('.params__change'),
  //         spans = elem.querySelectorAll('span'),
  //         inputs = elem.querySelectorAll('input');

  //   inputs.forEach(item => item.style.display = 'none');

  //   btn.addEventListener('click', () => {

  //     if (inputs[0].style.display === 'none') {
  //       btn.classList.remove('params__change_change');
  //       btn.classList.add('params__change_done');

  //       spans.forEach(item => item.style.display = 'none');
  //       inputs.forEach((item, i) => {
  //         inputs[i].value = spans[i].textContent;
  //         item.style.display = 'inline';
  //       });
  //     }
  //     else {
  //       btn.classList.remove('params__change_done');
  //       btn.classList.add('params__change_change');

  //       spans.forEach((item, i) => {
  //         spans[i].textContent = inputs[i].value;
  //         item.style.display = 'inline';
  //       });
  //       inputs.forEach(item => item.style.display = 'none');
  //     }
  //   });
  // }

  document.querySelectorAll('.params').forEach(item => onChangeParams(item));

  });

