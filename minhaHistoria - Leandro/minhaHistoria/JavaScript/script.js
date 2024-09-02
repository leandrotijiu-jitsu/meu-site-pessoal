const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav_menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

const menu2 = document.querySelector('.menu-animado');

menu2.addEventListener('mouseover', function () {
  menu2.classList.add('animacao-menu');
});

menu2.addEventListener('mouseout', function () {
  menu2.classList.remove('animacao-menu');
});

const foodImg = document.getElementById("food-img");
foodImg.classList.add("rotate");