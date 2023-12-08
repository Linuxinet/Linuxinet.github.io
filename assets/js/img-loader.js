document.addEventListener('DOMContentLoaded', function () {
    // Existing code for loading images
    fetch('assets/images.json')
        .then(response => response.json())
        .then(data => {
            const gallery = document.querySelector('.gallery');
            data.images.forEach(function (image) {
                const card = document.createElement('div');
                card.className = 'card';

                const img = document.createElement('img');
                img.src = "assets/img/" + image.name;
                img.alt = 'Artwork';
                // assets/img/art-img/DALL·E 2023-12-08 12.32.48.png
                const promptText = document.createElement('p');
                promptText.textContent = image.prompt;

                card.appendChild(img);
                card.appendChild(promptText);
                gallery.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading the images:', error));

    // New snippet for category buttons
    document.querySelectorAll('.category-button').forEach(button => {
        button.addEventListener('click', function () {
            document.querySelector('.gallery').className = 'gallery ' + this.dataset.category;
        });
    });

    // Initialize Magnifier for each image
    const galleryImages = document.querySelectorAll('.gallery .card img');
    galleryImages.forEach(img => {
        new Magnifier(img);
    });
});
