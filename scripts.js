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
    let slideTimeout;
    showSlides();

    window.currentSlide = function(n) {
        clearTimeout(slideTimeout);
        slideIndex = n - 1;
        showSlides();
    }

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("hero-slide");
        let dots = document.getElementsByClassName("hero-dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            slides[i].classList.add("inactive");
        }
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" hero-active", "");
        }
        slides[slideIndex].classList.add("active");
        slides[slideIndex].classList.remove("inactive");
        dots[slideIndex].className += " hero-active";
        slideIndex++;
        slideTimeout = setTimeout(showSlides, 4000); // Change slide every 4 seconds
    }
});
