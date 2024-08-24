document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform registration logic here (e.g., save user details to a database)
    // This is where you would usually call an API to register the user

    // If registration is successful, redirect to login.html
    if (username && email && password) {  // You can add actual registration logic here
        console.log('Registration successful');
        window.location.href = 'login.html';  // Redirect to login.html
    } else {
        alert('Registration failed. Please fill in all fields.');
    }
});
