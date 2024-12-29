document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html")
        .then(response => response.text())
        .then(footerData => {
            // Insert the footer
            document.getElementById("footer-placeholder").innerHTML = footerData;
        })
        .catch(error => {
            console.error('Erreur lors du chargement du footer:', error);
        });

    // Slider functionality
    let slideIndex = 0;
    showSlides();

    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }

    window.currentSlide = function(n) {
        showSlides(slideIndex = n - 1);
    }

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("hero-slide");
        let dots = document.getElementsByClassName("hero-dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            slides[i].classList.add("inactive");
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" hero-active", "");
        }
        slides[slideIndex-1].classList.add("active");
        slides[slideIndex-1].classList.remove("inactive");
        dots[slideIndex-1].className += " hero-active";
        setTimeout(showSlides, 4000); // Change slide every 4 seconds
    }
});
