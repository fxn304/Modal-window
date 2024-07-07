'use strict';

const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const openBtn = document.querySelectorAll('.show-modal');

for (let i = 0; i < openBtn.length; i++) {
  openBtn[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
  });
}

closeBtn.addEventListener('click', function () {
  modal.classList.add('hidden');
});

