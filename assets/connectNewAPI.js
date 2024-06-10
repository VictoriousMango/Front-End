document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('apiSearchForm');
    const entry = document.getElementById('Entry');
    const statusSpan = document.getElementById('Connection-status');

    form.addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the entered value
        const apiLink = document.getElementById('API-Search').value;

        // Display the entered value in the span
        entry.textContent = `Entered API Link: ${apiLink}`;
        console.info("Strting to Fetch")
        // Connecting with the API
        fetch(`${apiLink}/connectionStat`)
        .then((value) => {
            return value.json()
        }).then((value) => {
            statusSpan.textContent = `Connection Status: ${value.Connection_Status}`;
            console.info(value)
        })
        // Getting details to generate Form
        fetch(`${apiLink}/inputMethods`)
        .then((value) => {
            return value.json()
        }).then((value) => {
            formCreator(value);
        })
    });
});
