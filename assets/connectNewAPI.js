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

        try {
            // Fetch data from the API
            const response = await fetch(`${apiLink}`);
            console.log(response)
            
            if (response.ok) {
                const data = await response.json();
                const connectionStatus = `Connection Status: ${response.ok}`;
                statusSpan.textContent = connectionStatus;
                // formCreator();
            } else {
                const connectionStatus = `Connection Status: ${response.statusText}`;
                statusSpan.textContent = connectionStatus;
            }
        } catch (error) {
            statusSpan.textContent = 'Connection Status: Error occurred while fetching data';
            console.error('Error fetching data:', error);

            // Log the response text if it's not JSON
            // try {
            //     const response = await fetch(`${apiLink}/connectionStat`);
            //     const errorText = await response.text();
            //     console.error('Response text:', errorText);
            // } catch (textError) {
            //     console.error('Error reading response text:', textError);
            // }
        }
    });
});
