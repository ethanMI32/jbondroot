function validateCredentials(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // You can replace these values with the correct username and password.
    const validUsername = "ValdoObruchev";
    const validPassword = "Primo_bioniceye2021";
    
    if (username === validUsername && password === validPassword) {
        alert("Login successful! Please click button.");
        // Redirect to the new page if the credentials are correct.
        window.location.href = "http://10.0.2.15/";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}
