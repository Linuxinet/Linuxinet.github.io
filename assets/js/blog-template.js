function createMetaTags() {
    let head = document.head;
    let title = document.createElement('title');
    title.textContent = 'Blog Post Title - Vinay Kumar\'s Blog'; // Modify as needed

    let metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Detailed summary of the blog post topic.';

    let metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'Specific keywords related to the blog post, Technology, AI, Security Research';

    head.appendChild(title);
    head.appendChild(metaDescription);
    head.appendChild(metaKeywords);
}

function createHeader() {
    let headerHTML = `
        <header>
            <nav id="navbar">
                <a href="/">Home</a>
                <a href="/blog/">Blog</a>
                <a href="/gallery/">AI Art Gallery</a>
                <a href="/projects/">Projects</a>
                <a href="/about/">About Me</a>
            </nav>
        </header>`;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

function createFooter() {
    let footerHTML = `
        <footer>
            <p>© 2023 Vinay Kumar. All Rights Reserved.</p>
        </footer>`;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

document.addEventListener('DOMContentLoaded', () => {
    createMetaTags();
    createHeader();
    createFooter();
    // Load CSS
    loadCSS();
});

function loadCSS() {
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/assets/css/style.css'; // Update with the path to your CSS file
    document.head.appendChild(link);
}
