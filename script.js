document.addEventListener("DOMContentLoaded", ()=> {
    const elementosCarrucel = document.querySelectorAll(".carousel");
    M.Carousel.init(elementosCarrucel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true
    });
});