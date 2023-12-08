document.querySelectorAll('.short-description').forEach(element => {
    let maxLength = 100; // Maximum number of characters
    let trimmedString = element.textContent.substr(0, maxLength);

    // Re-trim if we are in the middle of a word
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));

    element.textContent = trimmedString + '...';
});
