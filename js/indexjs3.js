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


