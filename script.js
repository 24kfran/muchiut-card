document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;
    let currentGallery = [];

    // Al hacer clic en una imagen
    document.querySelectorAll(".gallery img").forEach((img, index) => {
        img.addEventListener("click", (e) => {
            const section = e.target.closest(".gallery");
            currentGallery = Array.from(section.querySelectorAll("img"));
            currentIndex = currentGallery.indexOf(e.target);

            openModal(currentGallery[currentIndex].src);
        });
    });

    // Abre el modal con la imagen actual
    function openModal(src) {
        modal.style.display = "flex";
        modalImage.src = src;
    }

    // Cierra el modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Navegar a la imagen anterior
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
        modalImage.src = currentGallery[currentIndex].src;
    });

    // Navegar a la siguiente imagen
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % currentGallery.length;
        modalImage.src = currentGallery[currentIndex].src;
    });

    // Cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
