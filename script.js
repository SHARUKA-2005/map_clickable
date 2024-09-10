// Function to display city and random transport number in the table
function showTransports(city) {
    // Generate a random number between 1 and 20
    const transports = Math.floor(Math.random() * 20) + 1;

    // Get the table body
    const tableBody = document.querySelector('#transportTable tbody');

    // Clear the previous rows
    tableBody.innerHTML = '';

    // Add a new row with the city name and number of transports
    const newRow = `<tr>
                        <td>${city}</td>
                        <td>${transports}</td>
                    </tr>`;

    tableBody.innerHTML = newRow;
}
