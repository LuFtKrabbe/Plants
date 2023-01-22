console.log(`Self-estimation of work:\n
Score: -- / --\n
- [x] Score 1 (0/--);\n
- [x] Score 2 (0/--);\n
- [x] Score 3 (0/--);\n
- [x] Score 4 (0/--);\n
- [x] Score 5 (0/--)`);

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