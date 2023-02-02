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
    
    function countActiveTags() {
        let activeTags = 0;
        for (let tag of serviceBlockButton.children) {
            if (tag.matches(".button-service-focus")) {activeTags++}
        }
        return activeTags;
    }
    
    function isTagActive(i) {
        return serviceBlockButton.children[i].matches(".button-service-focus");
    }

    if (event.target.name == 'tag-garden') {
        if (!((countActiveTags() == 2) && !(isTagActive(0)))) {
            tagGarden.classList.toggle("button-service-focus");
        }
    }
    if (event.target.name == 'tag-lawn') {
        if (!((countActiveTags() == 2) && !(isTagActive(1)))) {
            tagLawn.classList.toggle("button-service-focus");
        }
    }
    if (event.target.name == 'tag-planting') {
        if (!((countActiveTags() == 2) && !(isTagActive(2)))) {
            tagPlanting.classList.toggle("button-service-focus");
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

    for (let card of allCards) {
        if (selectedCards.includes(card) || (selectedCards.length == 0)) {
            (card.style.filter = 'blur(0px)');
        } else {
            (card.style.filter = 'blur(2px)');
        }
    }
}

let pricesBlockButton = document.getElementsByClassName('prices-block-button')[0];
let buttonBasics = document.getElementsByName("basics")[0];
let buttonStandard = document.getElementsByName("standard")[0];
let buttonProCare = document.getElementsByName("pro-care")[0];

pricesBlockButton.onclick = function(event) {

    function isTagActive(i) {
        return pricesBlockButton.children[i].matches(".button-price-focus");
    }
    console.log(event.target);

    if (event.target.attributes.name.value == 'basics') {
        buttonBasics.classList.toggle("button-price-focus");
        if (isTagActive(0)) {
            buttonBasics.children[1].style.visibility = 'visible';
        } else {
            buttonBasics.children[1].style.visibility = 'hidden';
        }
        if (isTagActive(1)) {
            buttonStandard.classList.toggle("button-price-focus")
            buttonStandard.children[1].style.visibility = 'hidden';
        }
        if (isTagActive(2)) {
            buttonProCare.classList.toggle("button-price-focus")
            buttonProCare.children[1].style.visibility = 'hidden';
        }
    }

    if (event.target.attributes.name.nodeValue == 'standard') {
        buttonStandard.classList.toggle("button-price-focus");
        if (isTagActive(0)) {
            buttonBasics.classList.toggle("button-price-focus");
            buttonBasics.children[1].style.visibility = 'hidden';
        }
        if (isTagActive(1)) {
            buttonStandard.children[1].style.visibility = 'visible';
        } else {
            buttonStandard.children[1].style.visibility = 'hidden';
        }
        if (isTagActive(2)) {
            buttonProCare.classList.toggle("button-price-focus");
            buttonProCare.children[1].style.visibility = 'hidden';
        }
    }

    if (event.target.attributes.name.nodeValue == 'pro-care') {
        buttonProCare.classList.toggle("button-price-focus");
        if (isTagActive(0)) {
            buttonBasics.classList.toggle("button-price-focus")
            buttonBasics.children[1].style.visibility = 'hidden';
        }
        if (isTagActive(1)) {
            buttonStandard.classList.toggle("button-price-focus")
            buttonStandard.children[1].style.visibility = 'hidden';
        }
        if (isTagActive(2)) {
            buttonProCare.children[1].style.visibility = 'visible';
        } else {
            buttonProCare.children[1].style.visibility = 'hidden';
        }
    }

    if (isTagActive(0) || isTagActive(1) || isTagActive(2)) {
        pricesBlockButton.style.height = '320px';
        pricesBlockButton.style.paddingTop = '20px';
        pricesBlockButton.style.paddingBottom = '20px';
    } else {
        pricesBlockButton.style.height = '284px';
        pricesBlockButton.style.paddingTop = '40px';
        pricesBlockButton.style.paddingBottom = '40px';
    }
}

function toContacts() {
    document.location='#contacts';
}