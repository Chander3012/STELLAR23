document.addEventListener("DOMContentLoaded", function () {
    let slider = document.querySelector(".slider-wrapper");
    let sliderInner = document.querySelector(".slider-inner");

    // Duplicate slides for seamless looping
    let clones = sliderInner.innerHTML;
    sliderInner.innerHTML += clones;

    // Get slide width for smooth transition
    let slideWidth = document.querySelector(".slide").offsetWidth;
    let totalWidth = slideWidth * document.querySelectorAll(".slide").length;

    // Apply animation dynamically
    sliderInner.style.width = totalWidth + "px";
    sliderInner.style.animation = `scrollLoop ${totalWidth / 100}s linear infinite`;
});
