let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-images img");
const indicators = document.querySelectorAll(".indicator");

function showSlide(index) {
    slideIndex = (index + slides.length) % slides.length;
    document.querySelector(".carousel-images").style.transform = `translateX(-${slideIndex * 100}%)`;
    updateIndicators();
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === slideIndex);
    });
}

function currentSlide(index) {
    showSlide(index);
}

setInterval(() => moveSlide(1), 10000); // Cambia de imagen cada 10 segundos
