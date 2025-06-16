window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) { // A partir de 100px de rolagem
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


window.addEventListener('scroll', () => {
  const menu = document.querySelector('.menu');
  if (window.scrollY > 50) { // Ajuste o valor de 50 pixels conforme necessário
    menu.classList.add('scrolled');
  } else {
    menu.classList.remove('scrolled');
  }
});