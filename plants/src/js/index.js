console.log(`Self-estimation of work:\n
Score: 85 / 85\n
- [x] The tablet layout is completely according to the sketch (24/24);\n
- [x] The mobile layout is completely according to the sketch (24/24);\n
- [x] There is no deformation of the sketch and horizontal scroll-line (15/15);\n
- [x] Adaptive menu has been added (22/22).`);

function dropHamburgerMenu() {
    document.getElementById("hamburger").classList.toggle("changeCross");
    document.getElementById("navigation").classList.toggle("show-navigation");
    document.getElementById("header-overlay").classList.toggle("header-overlay");
}

window.onclick = function(event) {
    if (event.target.matches('.header-overlay') && window.innerWidth <= 750) {
        dropHamburgerMenu();
    }
    if (event.target.matches('.header-navigation ul li a') && window.innerWidth <= 750) {
        dropHamburgerMenu();
    }
}