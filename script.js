let images = document.querySelectorAll(".gallery-img");
let currentIndex = 0;
function openLightbox(index) {
    currentIndex = index;
    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = images[currentIndex].src;
    lightbox.style.display = "flex";
}
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
function changeImage(direction) {
    currentIndex = currentIndex + direction;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    document.getElementById("lightbox-img").src = images[currentIndex].src;
}
function filterImages(category) {
    images.forEach(function (img) {
        if (category === "all" || img.classList.contains(category)) {
            img.classList.remove("hide");
        } else {
            img.classList.add("hide");
        }
    });

    let buttons = document.querySelectorAll(".filter-buttons button");
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
}

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeLightbox();
    }
    if (e.key === "ArrowRight") {
        changeImage(1);
    }
    if (e.key === "ArrowLeft") {
        changeImage(-1);
    }
});