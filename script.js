window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0); // Changed "window.screenY" to "window.scrollY"
});
