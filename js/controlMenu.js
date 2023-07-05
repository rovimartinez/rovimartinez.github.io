//Para ocultar el menú y la X primera parte
var menu = document.getElementById("menu");
var menuToggle = document.getElementById("menu-toggle");
var closeMenu = document.getElementById("close-menu");
var content = document.getElementById("content");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("show");
  content.classList.toggle("hide");
});

closeMenu.addEventListener("click", function () {
  menu.classList.toggle("show");
  content.classList.toggle("hide");
});

var accordionToggles = document.getElementsByClassName("accordion-toggle");
for (var i = 0; i < accordionToggles.length; i++) {
  accordionToggles[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var accordionContent = this.nextElementSibling;
    if (accordionContent.style.display === "block") {
      accordionContent.style.display = "none";
    } else {
      accordionContent.style.display = "block";
    }
  });
}

// Para ocultar el menu y la X segunda parte
var menuToggle = document.getElementById("menu-toggle");
var closeButton = document.getElementById("close-menu");

// Agrega un event listener para el evento de clic en el botón de cerrar menú
closeButton.addEventListener("click", function () {
  // Oculta el div al hacer clic en el botón de cerrar menú
  menuToggle.style.display = "block";
});

menuToggle.addEventListener("click", function () {
  // Oculta el div al hacer clic en el botón de cerrar menú
  menuToggle.style.display = "none";
});