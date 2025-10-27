const menuToggle = document.querySelector('.menu_toggle');

menuToggle.onclick = function () {
    document.querySelector('.nav_portfolio').classList.toggle('active');
};