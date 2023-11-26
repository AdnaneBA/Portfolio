// script.js
document.addEventListener("DOMContentLoaded", function () {
    animateHeader();
});

function animateHeader() {
    const header = document.querySelector("header");

    // Example animation: Change background color every 2 seconds
    setInterval(() => {
        header.style.backgroundColor = getRandomColor();
    }, 2000);
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}