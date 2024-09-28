document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('errorMessage');

    // Basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(emailInput.value)) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Please enter a valid email address.';
    } else {
        errorMessage.style.display = 'none';
        alert('Thank you for subscribing to our newsletter!');
       
    }
});
