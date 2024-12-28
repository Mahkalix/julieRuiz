document.addEventListener("DOMContentLoaded", function() {
    Promise.all([
        fetch("footer.html").then(response => response.text()),
        
    ]).then(([footerData, headerData]) => {
        document.getElementById("footer-placeholder").innerHTML = footerData;
    
    }).then(() => {
     
        const form = document.querySelector('form');
        if (form) {
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                alert('Form submitted!');
            });
        }


    }).catch(error => {
        console.error('Error loading footer or header:', error); // Update error message
    });
});
