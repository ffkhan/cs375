document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Capture the form data
    var formData = {
        name: document.getElementById('user-name').value,
        email: document.getElementById('signup-email').value,
        password: document.getElementById('signup-password').value,
        phone: document.getElementById('phone-number').value,
        street: document.getElementById('street-address').value,
        apartment: document.getElementById('apartment-address').value,
        zip: document.getElementById('zip-address').value,
        city: document.getElementById('city-address').value,
        country: document.getElementById('country-address').value
    };

    fetch('http://localhost:3000/api/v1/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        window.location.href = 'index.html';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});