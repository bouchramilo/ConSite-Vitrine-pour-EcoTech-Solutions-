window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {  // Si l'utilisateur fait défiler de plus de 50px
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});