document.addEventListener("DOMContentLoaded", function() {
    const logoutBtn = document.getElementById('logoutButton');
    const loginBtn = document.querySelector('#loginButton');
    const signupBtn = document.querySelector('#signupButton');
    const usernameDisplay = document.getElementById('usernameDisplay');
//    const searchInput = document.getElementById('searchInput');
//    const searchButton = document.getElementById('searchButton');

    const userName = localStorage.getItem('userName');
    if(userName) {
        displayLoggedInState();
    } else {
        displayLoggedOutState();
    }

    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('userName');
        displayLoggedOutState();
        window.location.href = 'index.html';
    });

//    if (searchInput && searchButton) {
//        searchButton.addEventListener('click', function() {
//        performSearch();
//    });
//
//    searchInput.addEventListener('keydown', function(event) {
//        if (event.key === 'Enter') {
//            performSearch();
//        }
//    });
//
//    function performSearch() {
//        const searchTerm = searchInput.value.trim();
//        if (searchTerm !== '') {
//                    // Make an AJAX request to your backend
//            fetch('http://localhost:3000/api/search', {
//                        method: 'POST',
//                        headers: {
//                            'Content-Type': 'application/json',
//                        },
//                        body: JSON.stringify({ searchTerm }),
//                    })
//                    .then(response => response.json())
//                    .then(results => {
//                        console.log('Search results:', results);
//                        // Handle the search results as needed
//                    })
//                    .catch(error => {
//                        console.error('Error:', error);
//                    });
//                }
//            }
//        } else {
//            console.error("Could not find searchInput or searchButton in the DOM.");
//        }
//


    function displayLoggedInState() {
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
        profileButton.style.display = 'block';
        usernameDisplay.style.display = 'block';
        usernameDisplay.textContent = userName;
const userId = localStorage.getItem('userID');
                    fetch(`http://localhost:3000/api/v1/users/${userId}`)
                        .then(response => response.json())
                        .then(data => {
                            if (data.isAdmin) {
                                sellerPageLink.style.display = 'block';
                            } else {
                                sellerPageLink.style.display = 'none';
                            }
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            alert("Error loading user data");
                        });
    }

    function displayLoggedOutState() {
        loginBtn.style.display = 'block';
        signupBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
        sellerPageLink.style.display = 'none';
        usernameDisplay.style.display = 'none';
        usernameDisplay.textContent = '';
        profileButton.style.display = 'none';
    }

});