/* Add close and open button functionality */
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

/* When user clicks the element with the id open, add the class show-nav to the container div*/
open.addEventListener('click', () => container.classList.add('show-nav'))

/* When user clicks the element with the id close, remove the class show-nav to the container div*/
close.addEventListener('click', () => container.classList.remove('show-nav'))