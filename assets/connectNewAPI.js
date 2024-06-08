document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('apiSearchForm');
    const statusSpan = document.getElementById('Connection-status');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the entered value
        const apiLink = document.getElementById('API-Search').value;

        // Display the entered value in the span
        statusSpan.textContent = `Entered API Link: ${apiLink}`;
    });
});

