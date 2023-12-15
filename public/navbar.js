document.write(`
    <nav class="navbar">
        <div class="logo">
            <a href="http://localhost:3000/public/index.html" class="brand-title">ShopSwift</a>
        </div>


        <ul class="nav-links">
            <li><a href="http://localhost:3000/public/index.html">Home</a></li>
            <li><a href="http://localhost:3000/public/cart.html">Shop</a></li>
        </ul>

        <div class="search-bar">
            <input type="text" placeholder="Search products..." style="width: 600px; padding: 8px;">
            <button type="button" style="width: 70px; padding: 8px;">Search </button>
            </button>
        </div>

        <div class="user-container">
            <span id="usernameDisplay"></span>
            <button id="profileButton" onclick="location.href='http://localhost:3000/public/userProfile.html';">
                <img src="../images/userProfile.png" alt="Profile Icon" style="width: 50px; height: 50px;">
            </button>
            <button id="cartButton" onclick="location.href='http://localhost:3000/public/cart.html';">
                <i class="fa fa-shopping-cart" style="font-size:50px"></i>
            </button>
            <button id="logoutButton" style="display: none;">Logout</button>
        </div>

        <div class="auth-buttons">
            <button id="loginButton" onclick="location.href='http://localhost:3000/public/login.html';">Login</button> <!-- Replace with your login path -->
            <button id="signupButton" onclick="location.href='http://localhost:3000/public/signup.html';">Sign Up</button> <!-- Replace with your signup path -->
        </div>
    </nav>

    <script src="navbarScript.js"></script>
`);
