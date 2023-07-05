 // Código JavaScript para controlar el carrusel

 const carousel = document.querySelector('.carousel');
 const progressBarFill = document.querySelector('.progress-bar-fill');
 const prevButton = document.querySelector('.prev-button');
 const nextButton = document.querySelector('.next-button');

 let currentIndex = 0;
 const slides = carousel.children;

 function showSlide(index) {
   for (let i = 0; i < slides.length; i++) {
     slides[i].style.display = 'none';
   }

   slides[index].style.display = 'flex';
   progressBarFill.style.width = ((index + 1) / slides.length) * 100 + '%';
 }

 // Muestra el primer slide al cargar la página
 showSlide(currentIndex);

 // Evento para avanzar al siguiente slide
 function nextSlide() {
   currentIndex++;
   if (currentIndex >= slides.length) {
     currentIndex = 0;
   }
   showSlide(currentIndex);
 }

 // Evento para retroceder al slide anterior
 function prevSlide() {
   currentIndex--;
   if (currentIndex < 0) {
     currentIndex = slides.length - 1;
   }
   showSlide(currentIndex);
 }

 // Agrega eventos a los botones de control
 prevButton.addEventListener('click', prevSlide);
 nextButton.addEventListener('click', nextSlide);