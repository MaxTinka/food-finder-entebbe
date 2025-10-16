// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    setupSearch();
    setupFilters();
});

// Setup main search
function setupSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const mainSearch = document.getElementById('mainSearch');
    const filterSearchBtn = document.getElementById('filterSearchBtn');
    const restaurantSearch = document.getElementById('restaurantSearch');
    
    if (searchBtn && mainSearch) {
        searchBtn.addEventListener('click', function() {
            performSearch(mainSearch.value);
        });
        
        mainSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
    }
    
    if (filterSearchBtn && restaurantSearch) {
        filterSearchBtn.addEventListener('click', function() {
            performRestaurantSearch();
        });
        
        restaurantSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performRestaurantSearch();
            }
        });
    }
}

// Setup filter functionality
function setupFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const ratingFilter = document.getElementById('ratingFilter');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', performRestaurantSearch);
    }
    
    if (priceFilter) {
        priceFilter.addEventListener('change', performRestaurantSearch);
    }
    
    if (ratingFilter) {
        ratingFilter.addEventListener('change', performRestaurantSearch);
    }
}

// Perform main search
function performSearch(query) {
    if (query.trim() !== '') {
        alert('Searching for: ' + query);
        // In a real application, this would filter restaurants
        // and update the UI accordingly
    } else {
        alert('Please enter a search term');
    }
}

// Perform restaurant search with filters
function performRestaurantSearch() {
    const searchQuery = document.getElementById('restaurantSearch')?.value || '';
    const category = document.getElementById('categoryFilter')?.value || '';
    const price = document.getElementById('priceFilter')?.value || '';
    const rating = document.getElementById('ratingFilter')?.value || '';
    
    // In a real application, this would filter the restaurant list
    // based on the selected criteria
    let filterMessage = 'Applying filters:';
    
    if (searchQuery) filterMessage += ` Search: "${searchQuery}"`;
    if (category) filterMessage += ` Category: ${category}`;
    if (price) filterMessage += ` Price: ${price}`;
    if (rating) filterMessage += ` Min Rating: ${rating}`;
    
    console.log(filterMessage);
    // This is where you would update the restaurant grid
    // with the filtered results
}