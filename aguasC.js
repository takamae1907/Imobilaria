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



// Scroll automático horizontal
const carousel = document.getElementById('productCarousel');

setInterval(() => {
  carousel.scrollBy({
    left: 300,
    behavior: 'smooth'
  });

  // Volta ao início se chegar ao final
  if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1) {
    setTimeout(() => {
      carousel.scrollTo({ left: 0, behavior: 'smooth' });
    }, 1000);
  }
}, 4000); // tempo entre slides


//let mutiplicar = function (x, y ){
 // return x * y;
//}
//  alert(mutiplicar(4,2));

const dividir = (a, b) => a/b;
alert(dividir(10, 2));