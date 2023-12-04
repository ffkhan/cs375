// Replace 'your-api-url/protected-route' with the actual URL of your protected route
const apiUrl = 'your-api-url/protected-route';

// Replace 'your-jwt-token' with the actual JWT token
const jwtToken = 'your-jwt-token';

fetch(apiUrl, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${jwtToken}`,
    'Content-Type': 'application/json',
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
    // Handle the response data here
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle errors here
  });
