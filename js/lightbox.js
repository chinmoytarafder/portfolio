document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
        <span class="close" tabindex="0" role="button" aria-label="Close">&times;</span>
        <img class="lightbox-content" alt="Lightbox Content">
        <div class="caption"></div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImages = document.querySelectorAll('.project img'); // Select all project images
    const lightboxContent = document.querySelector('.lightbox-content');
    const caption = document.querySelector('.caption');
    const closeButton = document.querySelector('.lightbox .close');

    // Add tabindex="0" to all images for keyboard focusability
    lightboxImages.forEach(image => {
        image.setAttribute('tabindex', '0');

        // Open lightbox on image click
        image.addEventListener('click', (e) => {
            openLightbox(e.target);
        });

        // Open lightbox with Enter key
        image.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                openLightbox(e.target);
            }
        });
    });

    // Function to open the lightbox
    const openLightbox = (image) => {
        lightbox.style.display = 'flex';
        lightboxContent.src = image.src;
        caption.textContent = image.alt;
        closeButton.focus(); // Focus the close button for accessibility
    };

    // Close lightbox on close button click
    closeButton.addEventListener('click', () => {
        closeLightbox();
    });

    // Close lightbox with Enter key when focused on close button
    closeButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            closeLightbox();
        }
    });

    // Close lightbox by clicking outside the content
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close lightbox on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
    });

    // Function to close the lightbox
    const closeLightbox = () => {
        lightbox.style.display = 'none';
        lightboxContent.src = ''; // Clear the image source
        caption.textContent = ''; // Clear the caption
    };
});
