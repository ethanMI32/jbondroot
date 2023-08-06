 function validateCredentials(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // You can replace these values with the correct username and password.
    const validUsername = "JamesBond";
    const validPassword = "James5678";
    
    if (username === validUsername && password === validPassword) {
        alert("Login successful! Please click link");
        // Redirect to the new page if the credentials are correct.
        window.location.href = "new_page.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}