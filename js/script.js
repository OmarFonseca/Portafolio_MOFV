window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('hidden');
    }, 1000);
});
