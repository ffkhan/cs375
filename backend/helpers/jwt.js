const {expressjwt: jwt} = require('express-jwt');

function authJwt() {
    const secret = process.env.secret;
    const api = process.env.API_URL;
    return jwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [
            {url: /\/public\/uploads(.*)/ , methods: ['GET', 'OPTIONS'] },
            {url: /\/api\/v1\/products(.*)/ , methods: ['GET', 'OPTIONS'] },
            `${api}/users/login`,
            `${api}/users/register`,
        ]
    })
}

async function isRevoked(req, jwt) {
    const payload = jwt.payload;
    const isAdmin = payload.isAdmin;

    // Check the requested route and make decisions based on user role
    const requestedRoute = req.originalUrl;
    console.log(requestedRoute);

    if (isAdmin) {
        // Admin has access to all routes
        return false;
    } 
    else {
        // For non-admins, allow access to specific routes
        if (requestedRoute.startsWith(`/api/v1/categories`) && req.method === 'GET') {
            return false;
        }
        else if (requestedRoute.startsWith(`/api/v1/orders`) && req.method === 'POST') {
            return false;
        }
        else if (requestedRoute.startsWith(`/api/v1/orders/get/userorders/`) && req.method === 'GET') {
            return false;
        }
        else if (requestedRoute.startsWith(`/api/v1/products`) && req.method === 'GET') {
            return false;
        }
        else if (requestedRoute.startsWith(`/api/v1/users/`) && req.method === 'GET') {
            return false;
        }
        else {
            return true;
        }
    }
}

module.exports = authJwt