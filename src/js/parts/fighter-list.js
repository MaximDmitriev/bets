const figtherList = () => {
  
  const listBtn = document.querySelector('.fighters-list__btn'),
        listItems = document.querySelectorAll('.fighter-item');

  listItems.forEach(item => item.classList.add('show-list'));

  if (listBtn) {
    listBtn.addEventListener('click', () => {
      if (listItems[0].classList.contains('show-list')) {
        listItems.forEach(item => item.classList.remove('show-list'));
      }
      else {
        listItems.forEach(item => item.classList.add('show-list'));
      }
    });
  }
}

export default figtherList;