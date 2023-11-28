document.addEventListener("DOMContentLoaded", function () {
    fetch('http://localhost:3000/api/v1/products')
        .then(response => response.json())
        .then(data => {
            // Process the response and create product cards
            const productContainer = document.getElementById('products');
            console.log(productContainer);

            data.forEach(product => {
                const productCardHTML = createProductCard(product);
                productContainer.insertAdjacentHTML('beforeend', productCardHTML);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
        
});

function createProductCard(product) {
    return `
        <div class="product">
            <img alt="" class="product__image" src="${product.image}">
            <h2 class="product__name">${product.name}</h2>
            <h3 class="product__price">${product.price}</h3>
            <p>${product.description}</p>
            <button class="btn btn--primary" data-action="ADD_TO_CART">Add To Cart</button>
        </div>  
    `;
}
