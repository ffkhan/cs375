document.addEventListener("DOMContentLoaded", function() {
    const logoutBtn = document.getElementById('logoutButton');
    const loginBtn = document.querySelector('#loginButton');
    const signupBtn = document.querySelector('#signupButton');
    const usernameDisplay = document.getElementById('usernameDisplay');

    const userName = localStorage.getItem('userName');
    if(userName) {
        displayLoggedInState();
    } else {
        displayLoggedOutState();
    }

    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('userName');
        displayLoggedOutState();
        window.location.href = 'homepage.html';
    });

    function displayLoggedInState() {
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
        usernameDisplay.style.display = 'block';
        usernameDisplay.textContent = userName;
    }

    function displayLoggedOutState() {
        loginBtn.style.display = 'block';
        signupBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
        usernameDisplay.style.display = 'none';
        usernameDisplay.textContent = '';
    }
});