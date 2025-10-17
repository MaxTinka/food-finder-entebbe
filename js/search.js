// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('mainSearch');
    const searchBtn = document.getElementById('searchBtn');

    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', function() {
            performSearch(searchInput.value.trim());
        });

        // Optional: search as you type
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                performSearch(searchInput.value.trim());
            }
        });
    }
});

// Perform search on restaurants
function performSearch(query) {
    query = query.toLowerCase();

    const allRestaurantsContainer = document.getElementById('allRestaurants');
    if (!allRestaurantsContainer) return;

    const filtered = restaurants.filter(restaurant => {
        const nameMatch = restaurant.name.toLowerCase().includes(query);
        const locationMatch = restaurant.location.toLowerCase().includes(query);
        const categoryMatch = restaurant.category.toLowerCase().includes(query);
        const tagsMatch = restaurant.tags.some(tag => tag.toLowerCase().includes(query));

        return nameMatch || locationMatch || categoryMatch || tagsMatch;
    });

    if (filtered.length === 0) {
        allRestaurantsContainer.innerHTML = `<p style="text-align:center; font-weight:bold; margin-top:20px;">No restaurants found for "${query}"</p>`;
        return;
    }

    allRestaurantsContainer.innerHTML = filtered.map(restaurant => `
        <div class="restaurant-card" data-category="${restaurant.category}" data-price="${restaurant.price}" data-rating="${restaurant.rating}">
            <div class="restaurant-img" style="background-image: url('${restaurant.image}')"></div>
            <div class="restaurant-info">
                <h3>${restaurant.name}</h3>
                <div class="restaurant-meta">
                    <span><i class="fas fa-map-marker-alt"></i> ${restaurant.location}</span>
                    <span class="rating"><i class="fas fa-star"></i> ${restaurant.rating}</span>
                </div>
                <div class="restaurant-tags">
                    ${restaurant.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <p>${restaurant.description}</p>
                <div class="restaurant-footer">
                    <span class="price">${restaurant.price}</span>
                    <button class="btn btn-primary">View Menu</button>
                </div>
            </div>
        </div>
    `).join('');
}