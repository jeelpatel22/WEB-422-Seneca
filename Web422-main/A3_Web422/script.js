// Function to display the product details in the modal
function displayProductModal(product) {
    const modalTitle = document.getElementById('productModalLabel');
    const modalBody = document.getElementById('productModalBody');

    // Set the modal title and body content with product details
    modalTitle.innerText = product.title;
    modalBody.innerHTML = `
        <p><strong>Price:</strong> $${product.price}</p>
        <p><strong>Description:</strong> ${product.description}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <p><strong>Rating:</strong> ${product.rating.rate}</p>
        <p><strong>Count:</strong> ${product.rating.count}</p>
        <img src="${product.image}" alt="${product.title}" width="200">
    `;

    // Show the modal
    $('#productModal').modal('show');
}

function filterTable() {
    const searchInput = document.getElementById('searchInput');
    const filter = searchInput.value.toLowerCase();
    const tableBody = document.getElementById('productTableBody');
    const rows = tableBody.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let rowMatches = false;

        for (let j = 1; j < cells.length; j++) { // Start from 1 to skip the first cell (ID)
            const cellText = cells[j].textContent || cells[j].innerText;
            if (cellText.toLowerCase().includes(filter)) {
                rowMatches = true;
                break; // Break the inner loop if a match is found in any cell
            }
        }

        if (rowMatches) {
            rows[i].style.display = ''; // Show the row
        } else {
            rows[i].style.display = 'none'; // Hide the row
        }
    }
}

// Add an event listener to the search button
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', filterTable);

// Function to fetch data from the API and populate the table
function fetchDataAndPopulateTable() {
    fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.getElementById('productTableBody');
            tableBody.innerHTML = ''; // Clear existing table rows

            data.forEach(product => {
                const row = tableBody.insertRow();
                row.innerHTML = `
                    <td>${product.id}</td>
                    <td>${product.title}</td>
                    <td>$${product.price}</td>
                    <td>${product.description}</td>
                    <td>${product.category}</td>
                    <td><img src="${product.image}" alt="${product.title}" width="100"></td>
                    <td>${product.rating.rate}</td>
                    <td>${product.rating.count}</td>
                `;

                // Add a click event listener to each row
                row.addEventListener('click', () => {
                    // Call the function to display the modal with product details
                    displayProductModal(product);
                });
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call the function to populate the table when the page loads
document.addEventListener('DOMContentLoaded', fetchDataAndPopulateTable);
