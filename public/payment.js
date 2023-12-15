const token = localStorage.getItem("token");
const user = localStorage.getItem("userID");

document.addEventListener("DOMContentLoaded", function () {

    const submitPaymentButton = document.getElementById('submitPayment');

    submitPaymentButton.addEventListener('click', async function () {
        // Collect data from the forms
        const paymentOption = document.getElementById('paymentOptions').value;
        let paymentData;

        if (!userId) {
            alert("You need to login first!");
            window.location.href = 'index.html';
            return;
        }

        switch (paymentOption) {
            case 'creditCard':
                paymentData = {
                    cardNumber: document.getElementById('cardNumber').value,
                    expiryDate: document.getElementById('expiryDate').value,
                    cvv: document.getElementById('cvv').value,
                    billingName: document.getElementById('billingName').value,
                    billingAddress: document.getElementById('billingAddress').value,
                    billingCity: document.getElementById('billingCity').value,
                    billingState: document.getElementById('billingState').value,
                    billingZip: document.getElementById('billingZip').value,
                };
                break;

            case 'paypal':
                paymentData = {
                    paypalEmail: document.getElementById('paypalEmail').value,
                    // Add additional PayPal fields as needed
                };
                break;

            case 'credits':
                // Handle credit payment data
                break;

            default:
                console.error('Invalid payment option');
                return;
        }

        const shippingData = {
            shippingName: document.getElementById('shippingName').value,
            shippingAddress: document.getElementById('shippingAddress').value,
            shippingCity: document.getElementById('shippingCity').value,
            shippingState: document.getElementById('shippingState').value,
            shippingZip: document.getElementById('shippingZip').value,
            user: user
        };

        let cart = (JSON.parse(localStorage.getItem('cart')) || []);

        // Create a new array in the desired format
        let formattedCart = cart.map(item => ({
            quantity: item.quantity,
            product: item.id, // Use the 'id' property as the product ID
        }));

        const orderData = {
            "orderItems": formattedCart,
            "shippingAddress1": document.getElementById('shippingName').value,
            "city": document.getElementById('shippingCity').value,
            "zip": document.getElementById('shippingZip').value,
            "country": document.getElementById('shippingCountry').value,
            "phone": document.getElementById('phone').value,
            "user": user
        };

    try {
        const response = await submitOrder(orderData);
    
            alert(`Your order has been successfully added!`);
            window.location.href = 'cart.html';
    } catch (error) {
        // Handle general error (network issues, etc.)
        console.error('Error:', error);
    }
});

    // Function to submit the order
    async function submitOrder(orderData) {
        const response = await fetch('http://localhost:3000/api/v1/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(orderData),
        });

        return await response.json();
    }

    // Additional code for handling other payment options or going back to the cart
    const backButton = document.getElementById('back');
    
    backButton.addEventListener('click', function () {
        // Redirect back to the cart page
        window.location.href = 'cart.html';
    });
});
