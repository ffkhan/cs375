document.write(`
    <nav class="navbar">
        <div class="logo">
            <a href="./index.html" class="brand-title">ShopSwift</a>
        </div>


        <ul class="nav-links">
            <li><a href="./index.html">Home</a></li>
            <li><a href="./cart.html">Shop</a></li>
            <li id="sellerPageLink"><a href="./sellerPage.html">Seller Page</a></li>
        </ul>

        <div class="search-bar">
            <input type="text" placeholder="Search products..." style="width: 600px; padding: 8px;">
            <button type="button" style="width: 70px; padding: 8px;">Search </button>
            </button>
        </div>

        <div class="user-container">
            <span id="usernameDisplay"></span>
            <button id="profileButton" onclick="location.href='./userProfile.html';">
                <img src="../images/userProfile.png" alt="Profile Icon" style="width: 50px; height: 50px;">
            </button>
            <button id="cartButton" onclick="location.href='./cart.html';">
                <i class="fa fa-shopping-cart" style="font-size:50px"></i>
            </button>
            <button id="logoutButton" style="display: none;">Logout</button>
        </div>

        <div class="auth-buttons">
            <button id="loginButton" onclick="location.href='./login.html';">Login</button> <!-- Replace with your login path -->
            <button id="signupButton" onclick="location.href='./signup.html';">Sign Up</button> <!-- Replace with your signup path -->
        </div>
    </nav>

    <script src="navbarScript.js"></script>
`);
