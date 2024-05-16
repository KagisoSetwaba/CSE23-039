
function search() {
    // Get the search query
    var input = document.getElementById('searchInput').value.toLowerCase();
    
    // Filter the items based on the search query
    var results = [];
    // Replace 'items' with your array of movies, shows, apps, and games
    items.forEach(function(item) {
        if (item.title.toLowerCase().includes(input)) {
            results.push(item);
        }
    });

    // Display the search results
    displayResults(results);
}

function displayResults(results) {
    var container = document.getElementById('searchResults');
    container.innerHTML = '';

    // Display each result
    results.forEach(function(result) {
        var itemElement = document.createElement('div');
        itemElement.innerHTML = '<h3>' + result.title + '</h3>';
        // Add more details if needed
        container.appendChild(itemElement);
    });
}

