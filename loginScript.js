document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

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
            localStorage.setItem('userPassword', data.password);
            localStorage.setItem('userEmail', data.email);
            localStorage.setItem('userPhone', data.phone);
            localStorage.setItem('userStreet', data.street);
            localStorage.setItem('userApartment', data.apartment);
            localStorage.setItem('userZip', data.zip);
            localStorage.setItem('userCity', data.city);
            localStorage.setItem('userCountry', data.country);
            window.location.href = 'index.html';
        } else {
            alert("Login Failed");
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});