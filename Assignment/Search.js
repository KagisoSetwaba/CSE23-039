document.addEventListener("DOMContentLoaded", function() {
    // Add an event listener to the form for submitting the search query
    document.getElementById("searchForm").addEventListener("submit", function(event) {
        // Prevent the default form submission behavior, which would refresh the page
        event.preventDefault();

        // Get the value entered in the search input field
        var searchQuery = document.getElementById("searchInput").value.trim().toLowerCase();

        // Get the movie container with the matching ID
        var movieContainer = document.getElementById(searchQuery.replace(/\s+/g, '_'));

        // Check if the movie container exists
        if (movieContainer) {
            // Scroll to the section containing the matched movie container
            movieContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
