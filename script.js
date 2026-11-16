

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {

      
        // Create and display product cards on the page
        function displayProducts(products) {
            let productHTML = "";

            // Create a card for each product
            products.forEach(product => {
                productHTML += `
                    <div class="product-card">
                        <h3>${product.title}</h3>
                        <img src="${product.thumbnail}" width="150">
                        <p>Price: $${product.price}</p>
                        <p>${product.description}</p>
                    </div>
                `;
            });

            // Show a message when no products match the filters
            if (products.length === 0) {
                productHTML = "<p>No products found. Try another search.</p>";
            }

            // Insert the product cards into the HTML page
            document.getElementById("products").innerHTML = productHTML;
        }


        
        // Get the search box and category dropdown
        const searchInput = document.getElementById("searchInput");
        const categoryFilter = document.getElementById("categoryFilter");


        // SET UP CATEGORY DROPDOWN
        // Get all unique product categories
        const categories = [...new Set(
            data.products.map(product => product.category)
        )];

        // Add each category as an option in the dropdown
        categories.forEach(category => {
            categoryFilter.innerHTML += `
                <option value="${category}">${category}</option>
            `;
        });


        
        // Filter products using the search text and selected category
        function filterProducts() {
            const searchText = searchInput.value.toLowerCase();
            const selectedCategory = categoryFilter.value;

            const filteredProducts = data.products.filter(product => {

                // Check whether the product matches the selected category
                const matchesCategory =
                    selectedCategory === "all" ||
                    product.category === selectedCategory;

                // Check whether the product title matches the search text
                const matchesSearch =
                    product.title.toLowerCase().includes(searchText);

                // Keep products that match BOTH conditions
                return matchesCategory && matchesSearch;
            });

            // Display the filtered products
            displayProducts(filteredProducts);
        }


       
        // Filter products whenever the user types in the search box
        searchInput.addEventListener("input", filterProducts);

        // Filter products whenever the user changes the category
        categoryFilter.addEventListener("change", filterProducts);


        
        // Display all products when the page first loads
        displayProducts(data.products);

    })

    
    // Handle errors if the API request fails
    .catch(error => {
        console.error("Error fetching products:", error);

        document.getElementById("products").innerHTML =
            "<p>Sorry, something went wrong. Please try again later.</p>";
    });



  
      


  



