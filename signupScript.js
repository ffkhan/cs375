
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const userData = {
            name: document.getElementById('user-name').value,
            email: document.getElementById('signup-username').value,
            passwordHash: document.getElementById('signup-password').value,
            phone: document.getElementById('phone-number').value,
            isAdmin: false,
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
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => console.log('Success:', data))
        .catch((error) => console.error('Error:', error));

    });
});
