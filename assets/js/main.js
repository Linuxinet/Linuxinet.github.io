document.getElementById('learn-more').addEventListener('click', function() {
    // Smooth scroll to the About section
    window.scrollTo({
        top: document.getElementById('about').offsetTop,
        behavior: 'smooth'
    });
});

// Additional JavaScript for interactivity as needed
// Add click event listener to each featured item
document.querySelectorAll('.featured-blogs .blog-post, .featured-art .art-piece, .featured-projects .project').forEach(item => {
    item.addEventListener('click', () => {
        // Animation or action to perform on click
        item.style.opacity = '0.8';
        setTimeout(() => {
            item.style.opacity = '1';
        }, 500);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const discoverMoreBtn = document.getElementById('discover-more');
    if (discoverMoreBtn) {
        discoverMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const aiArtSection = document.getElementById('featured-art');
            if (aiArtSection) {
                aiArtSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                console.error('AI Art section not found');
            }
        });
    } else {
        console.error('Discover More button not found');
    }

    // ... other scripts ...
});

// blog html

function truncateDescription(description, maxLength) {
    if (description.length > maxLength) {
        return description.substring(0, maxLength) + '...';
    }
    return description;
}

function loadBlogPosts() {
    fetch('/assets/blog-posts.json')
        .then(response => response.json())
        .then(posts => {
            const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
            const blogContainer = document.getElementById('blog');
            sortedPosts.forEach(post => {
                const postElement = document.createElement('section');
                postElement.className = 'blog-post';
                postElement.innerHTML = `
                    <img src="${post.coverImage}" alt="Cover Image for ${post.title}" class="cover-image">
                    <div class="post-info">
                        <h2>${post.title}</h2>
                        <p class="post-date">${post.date}</p>
                        <p class="short-description">${truncateDescription(post.shortDescription, 100)}</p>
                        <div class="tags">${post.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
                        <a href="${post.link}">Read More</a>
                    </div>`;
                blogContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error loading blog posts:', error));
}

document.addEventListener('DOMContentLoaded', loadBlogPosts);

