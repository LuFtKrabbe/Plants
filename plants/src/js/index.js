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

let serviceBlockButton = document.getElementsByClassName('service-block-button')[0];
let tagGarden = document.getElementsByName("tag-garden")[0];
let tagLawn = document.getElementsByName("tag-lawn")[0];
let tagPlanting = document.getElementsByName("tag-planting")[0];

serviceBlockButton.onclick = function(event) {
    let allCards = document.getElementsByClassName("service-card");
    let selectedCards = [];
    let activeTags = 0;
    
    function countActiveTags() {
        for (let tag of serviceBlockButton.children) {
            if (tag.matches(".button-service-focus")) {activeTags++}
        }
        return activeTags;
    }
    
    function isTagActive(i) {
        return serviceBlockButton.children[i].matches(".button-service-focus");
    }
    /*
    console.log(isTagActive(0));
    console.log(isTagActive(1));
    console.log(isTagActive(2));
    console.log(countActiveTags());
    */
    if (event.target.name == 'tag-garden') {
        if (!((activeTags == 2) && !(isTagActive(0)))) {
            tagGarden.classList.toggle("button-service-focus");
        }
    }
    if (event.target.name == 'tag-lawn') {
        if (!((activeTags == 2) && !(isTagActive(1)))) {
            tagLawn.classList.toggle("button-service-focus");
        }
    }
    if (event.target.name == 'tag-planting') {
        if (!((activeTags == 2) && !(isTagActive(2)))) {
            tagPlanting.classList.toggle("button-service-focus");
        }
    }
    
    countActiveTags();
    
    for (let card of allCards) {
        if (activeTags > 0) {
            (card.style.filter = 'blur(2px)')
        } else {
            (card.style.filter = 'blur(0px)')
        }
    }

    if (tagGarden.classList.contains('button-service-focus')) {
        selectedCards.push(...document.getElementsByName("garden"));
    }
    if (tagLawn.classList.contains('button-service-focus')) {
        selectedCards.push(...document.getElementsByName("lawn"));
    }
    if (tagPlanting.classList.contains('button-service-focus')) {
        selectedCards.push(...document.getElementsByName("planting"));
    }

    for (let card of selectedCards) {card.style.filter = 'blur(0px)'}
}