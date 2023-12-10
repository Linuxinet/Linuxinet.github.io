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
