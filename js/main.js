// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

// Initialize the application
function initializeApp() {
    loadCategories();
    loadFeaturedRestaurants();
    loadFeatures();
    loadAllRestaurants();
    setupFAQ();
}

// Set up event listeners
function setupEventListeners() {
    // Auth buttons
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            alert('Login feature would open here');
        });
    }
    
    if (signupBtn) {
        signupBtn.addEventListener('click', function() {
            alert('Sign up feature would open here');
        });
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Search functionality
    const searchInput = document.getElementById('mainSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const filtered = restaurants.filter(r => {
                return r.name.toLowerCase().includes(query) ||
                       r.category.toLowerCase().includes(query) ||
                       r.tags.some(tag => tag.toLowerCase().includes(query));
            });
            displayRestaurants(filtered);
        });
    }
}

// Load categories
function loadCategories() {
    const categoriesContainer = document.getElementById('categoriesContainer');
    if (!categoriesContainer) return;
    
    categoriesContainer.innerHTML = categories.map(category => `
        <div class="category-card" data-category="${category.name.toLowerCase()}">
            <div class="category-icon">
                <i class="${category.icon}"></i>
            </div>
            <h3>${category.name}</h3>
        </div>
    `).join('');

    // Add click event to filter restaurants by category
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const selectedCategory = this.dataset.category;
            
            // Highlight selected card
            categoryCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');

            // Filter restaurants
            const filtered = restaurants.filter(r => {
                return r.category.toLowerCase() === selectedCategory || r.tags.some(tag => tag.toLowerCase() === selectedCategory);
            });

            displayRestaurants(filtered);
        });
    });
}

// Function to display restaurants dynamically
function displayRestaurants(list) {
    const allRestaurantsContainer = document.getElementById('allRestaurants');
    if (!allRestaurantsContainer) return;

    if (list.length === 0) {
        allRestaurantsContainer.innerHTML = `<p style="text-align:center; font-weight:bold; margin-top:20px;">No restaurants found.</p>`;
        return;
    }

    allRestaurantsContainer.innerHTML = list.map(restaurant => `
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

// Load featured restaurants
function loadFeaturedRestaurants() {
    const featuredContainer = document.getElementById('featuredRestaurants');
    if (!featuredContainer) return;
    
    const featuredRestaurants = restaurants.filter(restaurant => restaurant.featured);
    
    featuredContainer.innerHTML = featuredRestaurants.map(restaurant => `
        <div class="restaurant-card">
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

// Load features
function loadFeatures() {
    const featuresContainer = document.getElementById('featuresContainer');
    if (!featuresContainer) return;
    
    featuresContainer.innerHTML = features.map(feature => `
        <div class="feature-card">
            <div class="feature-icon">
                <i class="${feature.icon}"></i>
            </div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>
    `).join('');
}

// Load all restaurants initially
function loadAllRestaurants() {
    displayRestaurants(restaurants);
}

// Setup FAQ (optional)
function setupFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = answer.classList.contains('active');
            document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.remove('active'));
            if (!isActive) answer.classList.add('active');
        });
    });
}