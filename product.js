window.addEventListener("load", function () {
    fetch('http://localhost:3000/api/v1/products')
        .then(response => response.json())
        .then(data => {
            // Process the response and create product cards
            const productContainer = document.getElementById('products');
            console.log(productContainer);

            data.forEach(product => {
                const productMainDiv = document.createElement("div");
                productMainDiv.classList.add('product');
                const productCardHTML = createProductCard(product);
                productMainDiv.innerHTML = productCardHTML;
                var button = document.createElement('button');
                button.classList.add('btn');
                button.classList.add('btn-primary');
                button.textContent = 'Add To Cart';

                // Add event listener to the button
                button.addEventListener('click', function () {
                    //alert('Buy button clicked for product: ' + product.name);
                    const productDetails = {
                      image: product.image,
                      name: product.name,
                      price: product.price,
                      quantity: 1,
                    };
                
                    const isInCart = (cart.filter(cartItem => (cartItem.name === product.name)).length > 0);
                
                    if (!isInCart) {
                      insertItemToDOM(productDetails);
                      cart.push(productDetails);
                      localStorage.setItem('cart', JSON.stringify(cart));
                      handleActionButtons(button, product);
                    }
                });
                productMainDiv.appendChild(button);
                productContainer.appendChild(productMainDiv);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
        
});

function createProductCard(product) {
    return `
            <img alt="" class="product__image" src="${product.image}">
            <h2 class="product__name">${product.name}</h2>
            <h3 class="product__price">${product.price}</h3>
            <p>${product.description}</p>
    `;
}

function insertItemToDOM(product) {
    cartDOM.insertAdjacentHTML('beforeend', `
      <div class="cart__item">
        <h3 class="cart__item__name">${product.name}</h3>
        <h3 class="cart__item__price">${product.price}</h3>
        <button class="btn btn--primary btn--small${(product.quantity === 1 ? ' btn--danger' : '')}" data-action="DECREASE_ITEM">&minus;</button>
        <h3 class="cart__item__quantity">${product.quantity}</h3>
        <button class="btn btn--primary btn--small" data-action="INCREASE_ITEM">&plus;</button>
        <button class="btn btn--danger btn--small" data-action="REMOVE_ITEM">&times;</button>
      </div>
    `);
  
}
