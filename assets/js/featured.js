function loadFeaturedContent() {
    fetch('/assets/featured.json')
        .then(response => response.json())
        .then(data => {
            const blogsContainer = document.getElementById('featured-blogs');
            data.featuredBlogs.forEach(blog => {
                const blogElement = `
                    <div class="blog-post">
                        <img src="${blog.image}" alt="${blog.title}" class="cover-image">
                        <div class="post-info">
                            <h2>${blog.title}</h2>
                            <p class="short-description">${blog.description}</p>
                            <a href="${blog.link}">Read More</a>
                        </div>
                    </div>
                `;
                blogsContainer.innerHTML += blogElement;
            });
        })
        .catch(error => console.error('Error loading featured content:', error));
}

function loadFeaturedAiArt() {
    fetch('/assets/images.json') // Adjust the path as necessary
        .then(response => response.json())
        .then(data => {
            const featuredGallery = document.querySelector('#featured-art .gallery');
            // Sort images by date and select the top two
            const sortedAndFeaturedImages = data.images.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 2);

            sortedAndFeaturedImages.forEach(function (image) {
                const card = document.createElement('div');
                card.className = 'card';

                const img = document.createElement('img');
                img.src = "/assets/img/" + image.name;
                img.alt = 'Featured Artwork';

                const promptText = document.createElement('p');
                promptText.textContent = image.prompt;

                card.appendChild(img);
                card.appendChild(promptText);
                featuredGallery.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading featured art:', error));
}
loadFeaturedAiArt();


// Call the function when the page loads
loadFeaturedContent();
