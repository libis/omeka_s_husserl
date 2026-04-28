document.addEventListener("DOMContentLoaded", function() {
    const goTopBtn = document.querySelector(".scroll-to-top-button");

    goTopBtn.addEventListener("click", function() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    });
});