document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html")
        .then(response => response.text())
        .then(footerData => {
            document.getElementById("footer-placeholder").innerHTML = footerData;
        })
        .catch(error => {
            console.error('Erreur lors du chargement du footer:', error);
        });

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
        slideTimeout = setTimeout(showSlides, 4000); 
    }

});

const hamburger = document.querySelector(".hamburger");
const menuLeft = document.querySelector(".menu-left");
const menuRight = document.querySelector(".menu-right");

hamburger.addEventListener("click", () => {
    menuLeft.classList.toggle("active");
    menuRight.classList.toggle("active");
});

const form = document.getElementById('contact-form');
const result = document.getElementById('result');
console.log(form);

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});