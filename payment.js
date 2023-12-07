document.addEventListener("DOMContentLoaded", function() {
    const creditCardDetails = document.getElementById('creditCardDetails');
    const paypalDetails = document.getElementById('paypalDetails');

    const paymentOptions = document.getElementById('paymentOptions');
    paymentOptions.addEventListener('change', function() {
        const selectedOption = paymentOptions.value;

        // Always show the shipping address
        const shippingAddress = document.getElementById('shippingAddress');
        shippingAddress.style.display = 'block';

        // Hide/show credit card and PayPal details
        creditCardDetails.style.display = selectedOption === 'creditCard' ? 'block' : 'none';
        paypalDetails.style.display = selectedOption === 'paypal' ? 'block' : 'none';
        // Add other conditions for different payment options if needed
    });

    // Trigger the change event initially to set the initial visibility
    paymentOptions.dispatchEvent(new Event('change'));

    const backButton = document.getElementById('back');
        backButton.addEventListener('click', function() {
            // Redirect back to the cart page
            window.location.href = 'cart.html';
        });
});




