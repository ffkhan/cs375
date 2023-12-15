window.addEventListener("load", function () {
  fetch('http://localhost:3000/api/v1/products')
      .then(response => response.json())
      .then(data => {
          // Process the response and create product cards
          const productContainer = document.getElementById('products');

          data.forEach(product => {
              const productMainDiv = document.createElement("div");
              productMainDiv.classList.add('product');
              const productCardHTML = createProductCard(product);
              productMainDiv.innerHTML = productCardHTML;
              var button = document.createElement('button');
              button.style.display = 'none';
//              button.classList.add('btn');
//              button.classList.add('btn-primary');
//              button.textContent = 'Add To Cart';
//              button.setAttribute('id', 'addToCart');

              // Add event listener to the button
              button.addEventListener('click', function () {
                  const productDetails = {
                    image: product.image,
                    name: product.name,
                    price: product.price,
                    id: product.id,
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
      .then(() => {
        const addToCartButtonsDOM = document.querySelectorAll('[id^="addToCart"]');

        if (cart.length > 0) {
          cart.forEach(cartItem => {
            const product = cartItem;
            insertItemToDOM(product);

            addToCartButtonsDOM.forEach(addToCartButtonDOM => {
              const productDOM = addToCartButtonDOM.parentNode;

              if (productDOM.querySelector('.product__name').innerText === product.name) {
                handleActionButtons(addToCartButtonDOM, product);
              }
            });

          });
        }
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

