function login() {
    // Get values from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simulate a simple backend authentication
    if (username === "user" && password === "password") {
        alert("Login successful!");
        // Redirect to the dashboard or perform other actions after successful login
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
