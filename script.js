





function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}










// Typewriter effect

var typed = new Typed(".typewriter-text",
    {
        strings: ["DEVELOPER", "DESIGNER", "YOUTUBER"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    }
)

// Inicialización de AOS (Animación al hacer scroll)
AOS.init({
    duration: 1200, // Duración de las animaciones en milisegundos
    once: true      // Las animaciones ocurren solo una vez
});

// Validación del formulario
document.querySelector('form').addEventListener('submit', function(event) {
    const nombre = document.getElementById('name').value;
    const correo = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!nombre || !correo || !mensaje) {
        alert("Por favor completa todos los campos.");
        event.preventDefault(); // Previene el envío si faltan campos
    }
});
// Lightbox functionality
const galleryItems = document.querySelectorAll('.galeria .item img');
const lightbox = document.createElement('div');
const lightboxImage = document.createElement('img');

lightbox.classList.add('lightbox');
lightbox.appendChild(lightboxImage);
document.body.appendChild(lightbox);

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightboxImage.src = item.src;
        lightbox.classList.add('active');
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

