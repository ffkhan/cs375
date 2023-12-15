
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    //const alert = document.getElementById("alert");
    const errorMessage = document.getElementById('error-message');
  
    form.addEventListener('submit', function (event) {
        event.preventDefault();
  
        // Check if required fields are missing
        if (!form.checkValidity()) {
            errorMessage.textContent = 'Please fill out all required fields.';
            return;
        }
  
        // Clear previous error messages
        errorMessage.textContent = '';
  
        const formData = new FormData(form);
        const token = localStorage.getItem("token");
  
        fetch('http://localhost:3000/api/v1/products', {
          method: 'POST',
          body: formData,
          headers: {
            'Authorization': `Bearer ${token}`
          } 
        })
        .then(response => response.json())
        .then(data => {
          alert(`Your product ${data.name} has been successfully added!`);
          form.reset();
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
  });