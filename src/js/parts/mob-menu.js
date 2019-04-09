const mobmenu = () => {
  
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
      }
      else {
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
}

export default mobmenu;