const elementosAnimar = document.querySelectorAll('.text1,.text2,.text3, .text4');
const opcionesIntersection = {
  rootMargin: '0px',
  threshold: 0.5
}

const intersectionObserver = new IntersectionObserver(function(
  entradas,
  observer
) {
  entradas.forEach(entrada => {
    if (entrada.intersectionRatio > 0) {
      entrada.target.classList.add('animacion-activada');
      observer.unobserve(entrada.target);
    }
  });
},
opcionesIntersection);

elementosAnimar.forEach(elemento => {
  intersectionObserver.observe(elemento);
});


