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
});
