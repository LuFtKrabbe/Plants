console.log(`Self-estimation of work:\n
Score: 125 / 100\n
- [x] The images' focus changes due to the active tags (50/50);\n
- [x] All drop-down lists have been realized (50/50);\n
- [x] Choose any city you want (25/25).`);

function dropHamburgerMenu() {
    document.getElementById("hamburger").classList.toggle("change-cross");
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