// Sample restaurant data
const restaurants = [
    {
        id: 1,
        name: "Lakeview Restaurant",
        category: "local",
        rating: 4.5,
        price: "$$",
        location: "Central Entebbe",
        tags: ["Local Cuisine", "Seafood"],
        description: "Enjoy authentic Ugandan dishes with a stunning view of Lake Victoria.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        featured: true
    },
    {
        id: 2,
        name: "Fuego Latino",
        category: "international",
        rating: 4.7,
        price: "$$$",
        location: "Airport Road",
        tags: ["Latin American", "Grill"],
        description: "Experience the vibrant flavors of Latin America in the heart of Entebbe.",
        image: "https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        featured: true
    },
    {
        id: 3,
        name: "Entebbe Beach Cafe",
        category: "cafe",
        rating: 4.3,
        price: "$",
        location: "Lakeside",
        tags: ["Café", "Breakfast"],
        description: "Relaxing beachfront cafe with fresh coffee, pastries, and light meals.",
        image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        featured: true
    },
    {
        id: 4,
        name: "The Garden Grill",
        category: "international",
        rating: 4.2,
        price: "$$",
        location: "Central Entebbe",
        tags: ["Grill", "Garden"],
        description: "Fresh grilled dishes in a beautiful garden setting.",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        featured: false
    },
    {
        id: 5,
        name: "Matoke Inn",
        category: "local",
        rating: 4.6,
        price: "$$",
        location: "Lakeside",
        tags: ["Traditional", "Local Cuisine"],
        description: "Authentic Ugandan dishes including the famous matoke and much more.",
        image: "https://images.unsplash.com/photo-1578474842918-d78e3f1b929d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        featured: false
    },
    {
        id: 6,
        name: "Pizza Paradise",
        category: "fastfood",
        rating: 4.1,
        price: "$$",
        location: "Airport Road",
        tags: ["Pizza", "Italian"],
        description: "The best pizza in town with both local and international toppings.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        featured: false
    },
    {
        id: 7,
        name: "Nile Fish House",
        category: "seafood",
        rating: 4.4,
        price: "$$",
        location: "Lakeside",
        tags: ["Seafood", "Fresh Fish"],
        description: "Fresh fish from Lake Victoria prepared in traditional and modern styles.",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        featured: false
    },
    {
        id: 8,
        name: "Cafe Java",
        category: "cafe",
        rating: 4.0,
        price: "$",
        location: "Central Entebbe",
        tags: ["Coffee", "Breakfast"],
        description: "Premium coffee and light meals in a cozy atmosphere.",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        featured: false
    }
];

// Categories data
const categories = [
    { name: "Fast Food", icon: "fas fa-pizza-slice" },
    { name: "Local Dishes", icon: "fas fa-utensils" },
    { name: "Cafés", icon: "fas fa-mug-hot" },
    { name: "Seafood", icon: "fas fa-fish" },
    { name: "Desserts", icon: "fas fa-ice-cream" },
    { name: "Bars & Pubs", icon: "fas fa-wine-glass-alt" }
];

// Features data
const features = [
    {
        title: "Easy Search",
        description: "Find restaurants by location, cuisine, or dish with our intuitive search.",
        icon: "fas fa-search-location"
    },
    {
        title: "Mobile Friendly",
        description: "Access our platform on any device, anywhere in Entebbe.",
        icon: "fas fa-mobile-alt"
    },
    {
        title: "Verified Reviews",
        description: "Read genuine reviews from local food enthusiasts.",
        icon: "fas fa-star"
    },
    {
        title: "Fast Delivery",
        description: "Get your favorite meals delivered quickly to your location.",
        icon: "fas fa-shipping-fast"
    }
];