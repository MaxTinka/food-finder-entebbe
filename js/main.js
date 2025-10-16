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
}

// Load categories on homepage
function loadCategories() {
    const categoriesContainer = document.getElementById('categoriesContainer');
    if (!categoriesContainer) return;
    
    categoriesContainer.innerHTML = categories.map(category => `
        <div class="category-card">
            <div class="category-icon">
                <i class="${category.icon}"></i>
            </div>
            <h3>${category.name}</h3>
        </div>
    `).join('');
    
    // Add click event to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('h3').textContent;
            alert('Showing restaurants in ' + categoryName + ' category');
        });
    });
}

// Load featured restaurants on homepage
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
                    ${restaurant.tags.map(tag => <span class="tag">${tag}</span>).join('')}
                </div>
                <p>${restaurant.description}</p>
                <div class="restaurant-footer">
                    <span class="price">${restaurant.price}</span>
                    <button class="btn btn-primary">View Menu</button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click event to restaurant cards
    const restaurantCards = document.querySelectorAll('.restaurant-card');
    restaurantCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('btn')) {
                const restaurantName = this.querySelector('h3').textContent;
                alert('Showing details for ' + restaurantName);
            }
        });
    });
}

// Load features on homepage
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

// Load all restaurants on restaurants page
function loadAllRestaurants() {
    const allRestaurantsContainer = document.getElementById('allRestaurants');
    if (!allRestaurantsContainer) return;
    
    allRestaurantsContainer.innerHTML = restaurants.map(restaurant => `
        <div class="restaurant-card" data-category="${restaurant.category}" data-price="${restaurant.price}" data-rating="${restaurant.rating}">
            <div class="restaurant-img" style="background-image: url('${restaurant.image}')"></div>
            <div class="restaurant-info">
                <h3>${restaurant.name}</h3>
                <div class="restaurant-meta">
                    <span><i class="fas fa-map-marker-alt"></i> ${restaurant.location}</span>
                    <span class="rating"><i class="fas fa-star"></i> ${restaurant.rating}</span>
                </div>
                <div class="restaurant-tags">
                    ${restaurant.tags.map(tag => <span class="tag">${tag}</span>).join('')}
                </div>
                <p>${restaurant.description}</p>
                <div class="restaurant-footer">
                    <span class="price">${restaurant.price}</span>
                    <button class="btn btn-primary">View Menu</button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Setup pagination
    setupPagination();
}

// Setup FAQ functionality
function setupFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = answer.classList.contains('active');
            
            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('active');
            });
            
            // If this answer wasn't active, open it
            if (!isActive) {
                answer.classList.add('active');
            }
        });
    });
}

// Setup pagination for restaurants page
function setupPagination() {
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer) return;
    
    paginationContainer.innerHTML = `
        <button class="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>Next</button>
    `;
    
    const paginationButtons = paginationContainer.querySelectorAll('button');
    paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            paginationButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button if it's a number
            if (!isNaN(parseInt(this.textContent))) {
                this.classList.add('active');
            }
            alert('Page ' + this.textContent + ' would load here');
        });
    });
}