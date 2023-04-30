const elementosAnimar = document.querySelectorAll('.animar');

const opciones = {
  threshold: 0.5, // Cuando el 50% del elemento está visible
};

const observador = new IntersectionObserver(function(entries, observador) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animacion-activa');
      observador.unobserve(entry.target);
    }
  });
}, opciones);

elementosAnimar.forEach(elemento => {
  observador.observe(elemento);
});
