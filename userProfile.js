document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('profile-name').value = localStorage.getItem('userName');
    document.getElementById('profile-email').value = localStorage.getItem('userEmail');
    document.getElementById('profile-phone').value = localStorage.getItem('userPhone');
    document.getElementById('profile-street').value = localStorage.getItem('userStreet');
    document.getElementById('profile-apartment').value = localStorage.getItem('userApartment');
    document.getElementById('profile-zip').value = localStorage.getItem('userZip');
    document.getElementById('profile-city').value = localStorage.getItem('userCity');
    document.getElementById('profile-country').value = localStorage.getItem('userCountry');
});

