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
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    const username = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    fetch('http://localhost:3000/api/v1/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, password: password }),
    })
    .then(response => response.json())
    .then(data => {
        if(data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userName', data.name);
            localStorage.setItem('userID', data.id);
            if (data.isAdmin) {
                window.location.href = 'sellerPage.html';
            } else {
                window.location.href = 'index.html';
            }

        } else {
            alert("Login Failed");
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });

});