const popup = () => {
  
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
      }
      else {
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
              case 0 :
                popup.style.left = `${width}px`;
                popup.style.display = 'flex';
                break;
              case 1 :
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
}

export default popup;