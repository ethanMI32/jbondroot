function validateCredentials(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // You can replace these values with the correct username and password.
    const validUsername = "JohnSmith";
    const validPassword = "isthisreallysecure";
    
    if (username === validUsername && password === validPassword) {
        alert("Login successful! Please click button.");
        // Redirect to the new page if the credentials are correct.
        window.location.href = "smiths_page.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}
