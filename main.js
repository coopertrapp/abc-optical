const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

var images = ["header-image-1.jpg", "header-image-2.jpg"];
var header = [
    "Visionary Style, Clear Choices",
    "Eyes on Fashion, Vision in Focus",
];
var paragraph = [
    "Explore a world of impeccable vision and unparalleled style at ABC Optical. Our curated collection of premium eyewear blends fashion and function seamlessly. Elevate your look with frames that speak to your unique style, while enjoying crystal-clear vision. See the world with clarity and confidence, only at ABC Optical.",
    "At ABC Optical, precision meets style. Elevate your eyewear experience with frames that marry cutting-edge design and optical excellence. Our commitment to clear vision and fashionable frames ensures you not only see the world in sharp focus but also do it with flair. Step into a world where fashion meets function, only at ABC Optical.",
];

var x = 0;

var imgs = document.getElementById("header-img");
var heading1 = document.getElementById("heading1");
var paragraph1 = document.getElementById("paragraph1");

setInterval(slider, 4000);

function slider() {
    if (x < images.length) {
        x = x + 1;
    } else {
        x = 1;
    }

    imgs.src = "/img/" + images[x - 1];
    heading1.textContent = header[x - 1];
    paragraph1.textContent = paragraph[x - 1];
}

function search() {
    let filter = document.getElementById("search").value.toUpperCase();
    let items = document.querySelectorAll("article div div");
    let noMatchesHeader = document.getElementById("no-matches-header");

    let matchesFound = false;

    items.forEach((item) => {
        let h1Element = item.querySelector("h1");
        if (h1Element) {
            let value = h1Element.textContent || h1Element.innerText;
            if (value.toUpperCase().indexOf(filter) > -1) {
                item.style.display = "";
                matchesFound = true;
            } else {
                item.style.display = "none";
            }
        }
    });

    if (!matchesFound) {
        noMatchesHeader.style.display = "block";
    } else {
        noMatchesHeader.style.display = "none";
    }
}

let goTopButton = document.getElementById("goTopButton");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        goTopButton.style.display = "block";
    } else {
        goTopButton.style.display = "none";
    }
}

function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
