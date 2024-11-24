document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".image-slider");

    sliders.forEach(slider => {
        const images = slider.querySelectorAll(".slider-image");
        const prevButton = slider.querySelector(".prev-btn");
        const nextButton = slider.querySelector(".next-btn");
        let currentIndex = 0;

        // Display only the first image initially
        images.forEach((img, index) => {
            img.style.display = index === 0 ? "block" : "none";
        });

        // Function to show the current image
        const updateImage = () => {
            images.forEach((img, index) => {
                img.style.display = index === currentIndex ? "block" : "none";
            });
        };

        // Navigate to the previous image
        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around
            updateImage();
        });

        // Navigate to the next image
        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length; // Wrap around
            updateImage();
        });

        // Ensure buttons become visible when focused
        [prevButton, nextButton].forEach(button => {
            button.addEventListener("focus", () => {
                button.style.opacity = "1"; // Ensure visibility on focus
            });

            button.addEventListener("blur", () => {
                button.style.opacity = ""; // Revert to CSS-defined opacity
            });
        });
    });
});
