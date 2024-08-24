document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform login validation logic here (e.g., check if email and password are correct)
    // This is where you would usually call an API or check credentials

    // If login is successful, redirect to index.html
    if (email && password) {  // You can add actual validation logic here
        console.log('Login successful');
        window.location.href = 'index.html';  // Redirect to index.html
    } else {
        alert('Login failed. Please check your credentials.');
    }
});
