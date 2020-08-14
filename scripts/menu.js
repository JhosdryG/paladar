// Menu code
let menuButton = document.getElementById('menu_icon');
let menu = document.getElementById('menu');
let isActive = false;

menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');

    if (isActive) {
        menuButton.classList.replace(
            "fa-caret-up",
            "fa-caret-down"
        );
        isActive = false;
    } else {
        menuButton.classList.replace(
            "fa-caret-down",
            "fa-caret-up"
        );
        isActive = true;
    }

});

// Social bar code

let socialButton = document.getElementById('social_icon');
let social = document.getElementById('social');
let isSocialActive = false;

socialButton.addEventListener('click', () => {
    social.classList.toggle('active');
    if (isSocialActive) {
        socialButton.classList.replace(
            "fa-caret-down",
            "fa-caret-up"
        );
        isSocialActive = false;
    } else {
        socialButton.classList.replace(
            "fa-caret-up",
            "fa-caret-down"
        );
        isSocialActive = true;
    }
});

