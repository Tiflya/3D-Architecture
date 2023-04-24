let menuToggle = document.getElementById('menu-toggle');
let links = document.getElementsByClassName('links');

menuToggle.addEventListener('click', () => {
  for (let i = 0; i < links.length; i++) {
    links[i].classList.toggle('show-links');
  }
});