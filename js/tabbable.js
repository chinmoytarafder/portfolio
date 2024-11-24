document.addEventListener("DOMContentLoaded", () => {
    // List of elements to make tabbable
    const tabbableElements = ["p", "h1", "h2", "h3", "h4","ul", "button", "a"];

    tabbableElements.forEach(tagName => {
        const elements = document.querySelectorAll(tagName);
        elements.forEach(element => {
            // Set tabindex to 0 for all these elements
            element.setAttribute("tabindex", "0");
        });
    });
});
